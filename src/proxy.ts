import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicPaths = ["/", "/sign-in", "/sign-up"];
const orgSelectionPath = "/org-selection";

const matchesPath = (pathname: string, base: string) =>
  pathname === base || pathname.startsWith(`${base}/`);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId, redirectToSignIn } = await auth();
  const { pathname } = req.nextUrl;

  // Allow public routes
  if (publicPaths.some((path) => matchesPath(pathname, path))) {
    return NextResponse.next();
  }

  // Protect non-public routes
  if (!userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // For all protected routes, ensure org is selected
  if (!orgId && !matchesPath(pathname, orgSelectionPath)) {
    return NextResponse.redirect(new URL(orgSelectionPath, req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
