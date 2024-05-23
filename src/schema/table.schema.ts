import * as z from "zod";

const createTableSchema = z.object({
  branch: z.string({ required_error: "Branch is Required" }),
  seats: z.coerce
    .number({ required_error: "Seats is required" })
    .min(1, { message: "At least 1 seat is required" }),
  table1Capacity: z.coerce
    .number({ required_error: "Required" })
    .min(1, { message: "Required" }),
  table2Capacity: z.coerce.number().optional(),
  table3Capacity: z.coerce.number().optional(),
});
const EditableSchema = z.object({
  branch: z.string().optional(),
  seats: z.coerce
    .number({ required_error: "Seats is required" })
    .min(1, { message: "At least 1 seat is required" }),
  table1Capacity: z.coerce
    .number({ required_error: "Required" })
    .min(1, { message: "Required" }),
  table2Capacity: z.coerce.number().optional(),
  table3Capacity: z.coerce.number().optional(),
});

export const tableValidation = {
  createTableSchema,
  EditableSchema,
};
