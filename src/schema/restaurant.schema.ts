// import moment from "moment";
import { object, string, boolean } from "zod";

const OpeningHoursSchema = object({
  openingTime: object({}),
  closingTime: object({}),
});

// Define the insertRestaurantSchema
const insertRestaurantSchema = object({
  name: string().min(1, { message: "Restaurant name is required" }),
  location: string().min(1, { message: "Restaurant location is required" }),
  description: string().min(1, { message: "Description is required" }),
  close: object({
    from: object({}).optional(),
    to: object({}).optional(),
  }).optional(),
  reviewStatus: boolean().optional(),
  sunday: OpeningHoursSchema,
  monday: OpeningHoursSchema,
  tuesday: OpeningHoursSchema,
  wednesday: OpeningHoursSchema,
  thursday: OpeningHoursSchema,
  friday: OpeningHoursSchema,
  saturday: OpeningHoursSchema,
});

export const restaurantSchema = {
  insertRestaurantSchema,
};
