import { z } from "zod";

export const username = z
  .string()
  .min(3)
  .max(32)
  .toLowerCase()
  .trim()
  .regex(
    /^[a-zA-Z0-9\s]+$/,
    "Username may only contain alphanumeric characters and spaces.",
  );
