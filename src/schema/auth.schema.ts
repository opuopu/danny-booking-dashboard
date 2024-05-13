import * as z from "zod";

const loginValidationSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
const fogotpasswordSchema = z.object({
  email: z.string({ required_error: "Email is Required" }),
});

const changePasswordSchema = z.object({
  oldPassword: z.string({ required_error: "Old Password is required" }),
  newPassword: z
    .string({ required_error: "New Password is required" })
    .min(6, { message: "New Password must be at least 6 characters long" }),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
});
const resetPasswordSchema = z.object({
  newPassword: z
    .string({ required_error: "New Password is required" })
    .min(6, { message: "New Password must be at least 6 characters long" }),

  confirmPassword: z
    .string({ required_error: "Confirm Password is required" })
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
});

const createsubadminSchema = z.object({
  name: z.string({ required_error: "Worker name  is Required" }),
  email: z.string({ required_error: "Worker email  is Required" }),
  designation: z.string({ required_error: "Worker designation  is Required" }),
  password: z.string({ required_error: "Worker password is Required" }),
});
const EditWorkerSchema = z.object({
  fullName: z
    .string({ required_error: "Worker name is Required" })
    .min(1, { message: "Worker name is Required" }),

  phoneNumber: z.coerce
    .number({ required_error: "Worker phone number is Required" })
    .refine((value) => value.toString().length >= 11, {
      message: "Worker phone number must be at least 11 digits long",
    }),
});

export const authValidationSchema = {
  loginValidationSchema,
  fogotpasswordSchema,
  changePasswordSchema,
  resetPasswordSchema,
  createsubadminSchema,
  EditWorkerSchema,
};
