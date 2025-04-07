import { httpRouter } from "convex/server";
import { auth } from "./auth";
import { polar } from "./polar";

const http = httpRouter();

auth.addHttpRoutes(http);

polar.registerRoutes(http, {
  // Optional custom path, default is "/events/polar"
  path: "/events/polar",
  // Optional callbacks for webhook events
  onSubscriptionUpdated: async (_ctx, _event) => {},
});

export default http;
