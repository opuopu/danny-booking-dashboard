import * as z from "zod";

const createTableSchema = z.object({
  tableName: z.string({ required_error: "Table name is required" }),
  tableNo: z.string({ required_error: "Table number is required" }),
  seats: z.coerce.number({ required_error: "Seats is required" }),
});

export const tableValidation = {
  createTableSchema,
};
