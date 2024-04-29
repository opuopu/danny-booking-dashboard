import * as z from "zod";

const menuCategorySchema = z.object({
  title: z.string({ required_error: "Title is required" }),
});

export const menuValidationSchema = {
  menuCategorySchema,
};
