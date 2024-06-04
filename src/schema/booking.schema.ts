import * as z from "zod";

const reservationSchema = z.object({
  name: z.string({ required_error: "Customer name is required" }),
  email: z.string({ required_error: "Customer email is required" }),
  number: z.string().optional(),
  branch: z.string({ required_error: "Branch is required" }),
  date: z.string({ required_error: "Date is required" }),
  arrivalTime: z.string({ required_error: "Time is required" }),
  seats: z.coerce.number({}),
});

export const reservationValidation = {
  reservationSchema,
};
