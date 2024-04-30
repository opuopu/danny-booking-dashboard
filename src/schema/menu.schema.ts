import * as z from "zod";

const menuCategorySchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, { message: "Title is required" }),
  restaurant: z.string({ required_error: "Restaurant is required" }),
});

const AddmenuSchema = z.object({
  category: z.string({ required_error: "Category is required" }),
  name: z.string({ required_error: "Name is required" }),
  price: z.coerce.number({ required_error: "Price is required" }),
  available: z.boolean({ required_error: "Available is required" }),
  description: z.string({ required_error: "Description is required" }),
});
export const menuValidationSchema = {
  menuCategorySchema,
  AddmenuSchema,
};
