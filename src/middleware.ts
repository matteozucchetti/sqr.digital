import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isLoginPage = createRouteMatcher(["/login"]);
const isMarketingPage = createRouteMatcher(["/"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const isAuthenticated = await convexAuth.isAuthenticated();
  const isLogin = isLoginPage(request);
  const isMarketing = isMarketingPage(request);

  if (isMarketing) {
    return;
  }

  if (isLogin && isAuthenticated) {
    console.log("redirecting to /", {
      isLogin,
      isAuthenticated,
    });
    return nextjsMiddlewareRedirect(request, "/dashboard");
  }

  if (!isLogin && !isAuthenticated) {
    console.log("redirecting to /login", {
      isLogin,
      isAuthenticated,
    });
    return nextjsMiddlewareRedirect(request, "/login");
  }

  console.log("no redirect", {
    isLogin,
    isAuthenticated,
  });
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
