import * as z from "zod";

export const loginValidationSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
export const fogotpasswordSchema = z.object({
  email: z.string({ required_error: "Email is Required" }),
});
