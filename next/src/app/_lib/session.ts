"use server";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "@/app/_lib/definitions";
import { cookies } from "next/headers";
import { userStore } from "@/store/user";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export interface Welcome {
  user: WelcomeUser;
  expiresAt: Date;
  iat: number;
  exp: number;
}

export interface WelcomeUser {
  user: UserUser;
  token: string;
}

export interface UserUser {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: number[];
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt<Welcome>(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as Welcome;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function createSession(user: any) {
  // const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  // const setToken = userStore((state) => state.setTokenSession);
  // setToken(user.token)
  // console.log(userStore((state) => state.tokenSession));
  const session = await encrypt({ user });

  cookies().set("session", session);
}
