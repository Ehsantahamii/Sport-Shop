import { NextResponse } from "next/server";

export function middleware(req) {
  const accessToken = req.cookies.get("access_token");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
