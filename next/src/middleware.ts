import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// const GetMyRole = async (request: NextRequest) => {
//   const response = await fetch('http://localhost:3002/me', {
//     headers: {
//       cookie: request.headers.get('session') || '',
//     }
//   })

//   const data = await response.json()
//   return data
// }

export function middleware(request: NextRequest) {

  console.log('aaaaaaaaaaa');
  if (request.nextUrl.pathname === "/goods") {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // const session = cookies().get('session')?.value
  // console.log(session + 'aaa')
  // if (true) {
  //   return NextResponse.redirect(new URL('/', request.nextUrl));
  // }



  // GetMyRole(request).then(data => {
  //   // const data = currentRole.json()
  //   // console.log(data)

  //   if (request.nextUrl.pathname === "/goods" && data.role.includes(1))
  //     return NextResponse.redirect(new URL('/goods', request.url));
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