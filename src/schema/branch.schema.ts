import * as z from "zod";

const OpeningHoursSchema = z.object({
  openTime: z.string().optional(), // Assuming openingTime and closingTime are strings
  closeTime: z.string().optional(),
});

const createBranch = z.object({
  name: z
    .string({ required_error: "Branch name is required" })
    .min(1, { message: "Branch name is required" }),
  location: z.string({ required_error: "Branch location is required" }),
  daysOfWeek: z.string({ required_error: "Closed date is required" }),
  endTimeLimit: z.coerce.number().optional(),
  tables: z.string({ required_error: "tables is required" }),
  sunday: OpeningHoursSchema,
  monday: OpeningHoursSchema,
  tuesday: OpeningHoursSchema,
  wednesday: OpeningHoursSchema,
  thursday: OpeningHoursSchema,
  friday: OpeningHoursSchema,
  saturday: OpeningHoursSchema,
  emailTemplateText: z
    .string({ required_error: "Email template text is required" })
    .min(1, { message: "Email template text is required" }),
});

const editBranch = z.object({
  name: z
    .string({ required_error: "Branch name is required" })
    .min(1, { message: "Branch name is required" }),
  location: z
    .string({ required_error: "Branch location is required" })
    .min(1, { message: "Branch location is required" }),
  daysOfWeek: z
    .string({ required_error: "Closed date is required" })
    .min(1, { message: "Closed date is required" }),
  endTimeLimit: z.coerce.number().optional(),
  tables: z.coerce
    .number({ required_error: "Tables are required" })
    .min(1, { message: "Tables are required" }),
  sunday: OpeningHoursSchema,
  monday: OpeningHoursSchema,
  tuesday: OpeningHoursSchema,
  wednesday: OpeningHoursSchema,
  thursday: OpeningHoursSchema,
  friday: OpeningHoursSchema,
  saturday: OpeningHoursSchema,
  emailTemplateText: z
    .string({ required_error: "Email template text is required" })
    .min(1, { message: "Email template text is required" }),
});

export const branchValidation = {
  createBranch,
  editBranch,
};
