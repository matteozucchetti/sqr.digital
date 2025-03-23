import { z } from "zod";

export const squareName = z
  .string()
  .min(3)
  .max(32)
  .toLowerCase()
  .trim()
  .regex(
    /^[a-zA-Z0-9\s]+$/,
    "Square name may only contain alphanumeric characters and spaces.",
  );
