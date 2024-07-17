"use server";

import { decrypt, Welcome } from "@/app/_lib/session";
import { cookies } from "next/headers";

export const getCookie = async () => {
  const session = cookies().get("session")?.value;
  const parsed: Welcome | undefined = await decrypt(session);
  const cookies_token = parsed?.user.token;
  return cookies_token;
};

// export const getUser = async () => {
//   const session = cookies().get("session")?.value;
//   const parsed: Welcome | undefined = await decrypt(session);
//   const cookies_user = parsed?.user.user;
//   return cookies_user;
// };
