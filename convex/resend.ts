import { DEFAULT_AUDIENCE_ID } from "@/lib/config";
import { v } from "convex/values";
import { action } from "./_generated/server";

export const send = action({
  args: {
    to: v.union(v.string(), v.array(v.string())),
    subject: v.string(),
    html: v.string(),
  },
  handler: async (_ctx, args) => {
    // Get the Resend API key from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    // Send the email using Resend's API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `SQR Digital <${process.env.RESEND_SENDER_EMAIL_AUTH}>`,
        to: args.to,
        subject: args.subject,
        html: args.html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return response.json();
  },
});

export const addToAudience = action({
  args: {
    email: v.string(),
  },
  handler: async (_ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    const response = await fetch(
      `https://api.resend.com/audiences/${DEFAULT_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          email: args.email,
          unsubscribed: false,
        }),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed to add to audience: ${error.message}`);
    }

    return response.json();
  },
});
