import { httpRouter } from "convex/server";
import { auth } from "./auth";
import { polar } from "./polar";

const http = httpRouter();

auth.addHttpRoutes(http);

polar.registerRoutes(http, {
  // Optional custom path, default is "/events/polar"
  path: "/events/polar",
  // Optional callbacks for webhook events
  onSubscriptionUpdated: async (_ctx, event) => {
    console.log("Subscription updated", event);
    if (event.data.productId === polar.products.singleMonthly) {
      console.log("Single monthly subscription updated");
    }
    if (event.data.productId === polar.products.proMonthly) {
      console.log("Pro monthly subscription updated");
    }
  },
});

export default http;
