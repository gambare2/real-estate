import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page always
  if (pathname.startsWith("/crm/login")) {
    return NextResponse.next();
  }

  // Protect only /crm routes
  if (!pathname.startsWith("/crm")) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  // ❌ No tokens → redirect to login
  if (!accessToken && !refreshToken) {
    return redirectToLogin(req);
  }

  // ✅ Token exists → allow request
  // (verification happens in API routes)
  return NextResponse.next();
}

function redirectToLogin(req: NextRequest) {
  const loginUrl = new URL("/crm/login", req.url);
  loginUrl.searchParams.set("from", req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/crm/:path*"]
};
