import { object, string, boolean } from "zod";

// const OpeningHoursSchema = object({
//   openingTime: TimeSchema.optional(), // Allow for optional opening time
//   closingTime: TimeSchema.required({ message: "Closing time is required" }),
// });
const insertRestaurantSchema = object({
  name: string({ required_error: "Restaurant name is required" }),
  location: string({ required_error: "Restaurant location is required" }),
  description: string({ required_error: "Description is required" }),
  close: object({
    from: object({}).optional(),
    to: object({}).optional(),
  }).optional(),
  reviewStatus: boolean({}).optional(),
  // fileList: object({ required_error: "File list is required" }).array(),
  // sunday: OpeningHoursSchema,
  // monday: OpeningHoursSchema,
  // tuesday: OpeningHoursSchema,
  // wednesday: OpeningHoursSchema,
  // thursday: OpeningHoursSchema,
  // friday: OpeningHoursSchema,
  // saturday: OpeningHoursSchema,
});

export const restaurantSchema = {
  insertRestaurantSchema,
};
