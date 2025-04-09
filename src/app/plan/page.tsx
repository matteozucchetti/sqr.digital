"use client";

import { Display1, Display2, Text } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { ERRORS, INTERVALS, PLANS } from "@/lib/config";
import { useAction, useQuery } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Onboarding() {
  const user = useQuery(api.users.getUser);
  const plans = useQuery(api.plans.getPlans);
  const activePlan = user?.subscription?.planKey ?? PLANS.FREE;
  const createSubscriptionCheckout = useAction(
    api.stripe.createSubscriptionCheckout,
  );
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleUpgrade = async (planId: string) => {
    try {
      setLoadingPlan(planId);
      const checkoutUrl = await createSubscriptionCheckout({
        planId: planId as Id<"plans">,
        planInterval: INTERVALS.MONTH,
        currency: "eur",
        userId: user?._id as Id<"users">,
      });

      if (!checkoutUrl) {
        toast.error(ERRORS.SOMETHING_WENT_WRONG);
        return;
      }

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (_error) {
      toast.error(ERRORS.SOMETHING_WENT_WRONG);
    } finally {
      setLoadingPlan(null);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="mx-auto py-12 flex flex-col gap-4 text-center">
      <Display1 as="h1">Piano</Display1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans?.map((plan) => (
          <div
            key={plan.key}
            className="flex flex-col gap-2 p-6 border rounded-lg bg-white"
          >
            <div className="flex flex-row justify-between items-center">
              <Display2 as="h2">{plan.key.toUpperCase()}</Display2>
              {plan.key === activePlan && (
                <Badge variant="outline">Piano attuale</Badge>
              )}
            </div>
            <Text className="text-xl">
              {plan.key === PLANS.FREE
                ? `${plan.prices[INTERVALS.MONTH].eur.amount / 100} €`
                : `${(plan.prices[INTERVALS.MONTH].eur.amount / 100).toFixed(2)} €`}
            </Text>
            {plan.key !== PLANS.FREE && (
              <Button
                variant="default"
                disabled={plan.key === activePlan || loadingPlan !== null}
                onClick={() => handleUpgrade(plan._id)}
              >
                {loadingPlan === plan._id ? (
                  <Icons.Loader className="animate-spin" />
                ) : plan.key === activePlan ? (
                  "Piano attuale"
                ) : (
                  "Seleziona piano"
                )}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
