import { NextResponse } from 'next/server'
//middleware에서 jsonwebtoken을 못써서 다른 라이브러리인 Jose를 씀
import { decodeJwt } from 'jose';

export function middleware(request) {

  const requestHeaders = new Headers(request.headers);
  let authorization = requestHeaders.get('Authorization') || requestHeaders.get('authorization');

  const response = NextResponse;

  if (typeof authorization === 'string' &&
    (authorization.includes('bearer') || authorization.includes('Bearer'))) {
    const bearer = authorization.split(" ");
    if (bearer.length === 2 && typeof bearer[1] === "string") {
      const accessToken = bearer[1];
      const decodedToken = decodeJwt(accessToken, process.env.JWT_KEY);
      requestHeaders.set('userid', decodedToken.id);
    }
    else {
      response.json({ status: 401, message: "토큰이 이상해요!" })
    }
  }
  else {
    response.json({ status: 401, message: '헤더에 토큰 정보 없음' })
  }

  return response.next({
    request: {
      headers: requestHeaders,
    }
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/mypage', '/api/plogging-log', '/api/meets', '/api/join', '/api/coupons', '/api/mycoupons', '/api/point-logs']
}