import { z } from "zod";
import { mailFormSchema, mailStatusSchema } from "./validation";

export type MailForm = z.infer<typeof mailFormSchema>;

export type Status = z.infer<typeof mailStatusSchema>;

export interface ToastProps {
  title: string;
  description: string;
  status?: Status;
}
