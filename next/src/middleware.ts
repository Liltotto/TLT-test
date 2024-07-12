import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const GetMyRole = async () => {
  const response = await fetch('http://localhost:3002/me', {
    headers: {
      cookie: cookies().get('session')?.value  || '',
    }
  })

  const data = await response.json()
  return data
}

export function middleware(request: NextRequest) {


  const session = cookies().get('session')?.value
  if (!session) {
    return NextResponse.redirect(new URL('/', request.url));
  }


  if (request.nextUrl.pathname === "/algorithms") {
    GetMyRole().then(data => {
      console.log('фйу');
      console.log(data);
      if (data.role.includes(1))
        return NextResponse.redirect(new URL('/algorithms', request.url));
      return NextResponse.next();
    })
  }


  // GetMyRole(request).then(data => {

  //   if (request.nextUrl.pathname === "/algorithms" && data.role.includes(1))
  //     return NextResponse.redirect(new URL('/algorithms', request.url));
  //   return NextResponse.next();
  // })

  // const data = currentRole.json()
  // console.log(data)

  // if (request.nextUrl.pathname === "/algorithms" && data.role.includes(1))
  //   return NextResponse.redirect(new URL('/algorithms', request.url));

}

// ВСЕ МЕНЯЯЯТЬ

export const config = {
  matcher: ["/goods" ,"/algorithms"],
};