import { z } from "zod";
import { mailFormSchema } from "./validation";

export type MailForm = z.infer<typeof mailFormSchema>;
