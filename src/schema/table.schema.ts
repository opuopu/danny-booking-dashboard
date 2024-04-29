import * as z from "zod";

const createTableSchema = z.object({
  tableName: z.string({ required_error: "Table name is required" }),
  tableNo: z.string({ required_error: "Table number is required" }),
  seats: z.number().positive().min(1, { message: "Seats is required" }),
});

export const tableValidation = {
  createTableSchema,
};
