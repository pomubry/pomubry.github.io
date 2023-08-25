import { z } from "zod";

export const mailFormSchema = z.object({
  user_name: z.string().min(1, { message: "Name should not be empty" }),
  user_email: z.string().email({ message: "This is not a valid email" }),
  message: z
    .string()
    .min(5, { message: "Message should be at least 5 characters long" }),
});

export const mailStatusSchema = z.string().optional();

export const mailResponseSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: mailStatusSchema,
  apiDescription: z.string(),
});
