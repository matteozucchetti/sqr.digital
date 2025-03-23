"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Error logging (Sentry removed)
    console.error("Global error:", error);
  }, [error]);

  return <NextError statusCode={0} />;
}
