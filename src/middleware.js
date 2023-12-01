import { NextResponse } from 'next/server'
import { decodeJwt } from 'jose';

export function middleware(request) {

  const requestHeaders = new Headers(request.headers);
  let authorization = requestHeaders.get('Authorization') || requestHeaders.get('authorization');

  const response = NextResponse.next();

  if (typeof authorization === 'string' &&
    (authorization.includes('bearer') || authorization.includes('Bearer'))) {
    const bearer = authorization.split(" ");
    if (bearer.length === 2 && typeof bearer[1] === "string") {
      const accessToken = bearer[1];
      const decodedToken = decodeJwt(accessToken, process.env.JWT_KEY);
      response.headers.append("userid", decodedToken.id);
    }
    else {
      response.json({ status: 403, message: "잘못된 접근입니다." })
    }
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/mypage', '/api/plogging-log']
}