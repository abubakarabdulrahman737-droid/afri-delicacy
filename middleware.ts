import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  const { pathname } = request.nextUrl;
  const user = request.auth?.user;

  const protectedArea =
    pathname.startsWith("/customer") ||
    pathname.startsWith("/provider") ||
    pathname.startsWith("/admin");

  if (!protectedArea) return NextResponse.next();

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/admin") && user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/customer", request.url));
  }

  if (pathname.startsWith("/provider") && user.role !== "PROVIDER" && user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/customer", request.url));
  }

  if (pathname.startsWith("/customer") && user.role !== "CUSTOMER") {
    if (user.role === "PROVIDER") return NextResponse.redirect(new URL("/provider", request.url));
    if (user.role === "ADMIN") return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/customer/:path*", "/provider/:path*", "/admin/:path*"],
};
