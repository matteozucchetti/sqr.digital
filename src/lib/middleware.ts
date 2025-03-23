import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/login"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const isAuthenticated = await convexAuth.isAuthenticated();
  const isSignIn = isSignInPage(request);

  if (isSignIn && isAuthenticated) {
    console.log("redirecting to /", {
      isSignIn,
      isAuthenticated,
    });
    return nextjsMiddlewareRedirect(request, "/");
  }

  if (!isSignIn && !isAuthenticated) {
    console.log("redirecting to /login", {
      isSignIn,
      isAuthenticated,
    });
    return nextjsMiddlewareRedirect(request, "/login");
  }

  console.log("no redirect", {
    isSignIn,
    isAuthenticated,
  });

  return request;
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
