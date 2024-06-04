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
  branch: z.string({ required_error: "Please select a branch" }),
  password: z.string({ required_error: "Worker password is Required" }),
});
const editSubAdminSchema = z.object({
  name: z
    .string({ required_error: "Worker name is Required" })
    .min(1, { message: "Worker name is Required" }),
  designation: z
    .string({ required_error: "Worker designation is Required" })
    .min(1, { message: "Worker designation is Required" }),
});

export const authValidationSchema = {
  loginValidationSchema,
  fogotpasswordSchema,
  changePasswordSchema,
  resetPasswordSchema,
  createsubadminSchema,
  editSubAdminSchema,
};
