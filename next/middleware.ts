import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib";

const GetMyRole = async (request: NextRequest) => {
  const response = await fetch('http://localhost:3002/me', {
    headers: {
      cookie: request.headers.get('cookie') || '',
    }
  })

  const data = await response.json()
  return data
}

export async function middleware(request: NextRequest) {

  const currentRole = await GetMyRole(request)

  const data = currentRole.json()
  console.log(data)

  if (request.nextUrl.pathname === "/algorithms" && data.role.includes(1))
    return NextResponse.redirect(new URL('/algorithms', request.url));

}

// ВСЕ МЕНЯЯЯТЬ

export const config = {
  matcher: ["/goods"],
};