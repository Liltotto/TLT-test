import { type NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { logout, Welcome, WelcomeUser } from "@/app/_lib/session";
import { decrypt } from "@/app/_lib/session";

export async function middleware(request: NextRequest) {
  const session = cookies().get("session")?.value;
  if (!session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const parsed: Welcome | undefined = await decrypt(session);
  if (
    request.nextUrl.pathname === "/algorithms" &&
    !parsed!.user.user.roles.includes(1)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/goods", "/algorithms"],
};
