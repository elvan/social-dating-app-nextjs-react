import { NextResponse } from 'next/server';
import { auth } from './auth';
import { authRoutes, publicRoutes } from './routes';

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProfileComplete = req.auth?.user.profileComplete;

  if (isPublic) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/members', nextUrl));
    }
    return NextResponse.next();
  }

  if (!isPublic && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  if (isLoggedIn && !isProfileComplete && nextUrl.pathname !== '/complete-profile') {
    return NextResponse.redirect(new URL('/complete-profile', nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
