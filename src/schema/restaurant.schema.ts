import * as z from "zod";

// const OpeningHoursSchema = object({
//   openingTime: string({ required_error: "Opening time is required" }).regex(
//     /^\d{2}:\d{2} [AP]M$/i
//   ),
//   closingTime: string({ required_error: "Closing time is required" }).regex(
//     /^\d{2}:\d{2} [AP]M$/i
//   ),
// });

const createRestaurantValidation = z.object({
  name: z.string().min(1, { message: "Email is required" }),
  location: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const restaurantSchema = {
  createRestaurantValidation,
};
