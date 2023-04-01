import { z } from "zod";

export const bodySchema = z.object({
  user_name: z.string().min(1, { message: "Name should not be empty" }),
  user_email: z
    .string()
    .min(1, { message: "Email should not be empty" })
    .email({ message: "This is not a valid email" }),
  message: z
    .string()
    .min(5, { message: "Message should be at least 5 characters long" }),
});

export type bodyType = z.infer<typeof bodySchema>;
