import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineEmail, MdOutlineMessage, MdSend } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField, FormLabel, FormGroup, FormMessage } from "./FormMembers";
import { Toast, useToastProps } from "@/lib/toast";
import { mailFormSchema, mailResponseSchema } from "@/lib/validation";
import type { MailForm } from "@/lib/types";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toastProps, setToast } = useToastProps();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailForm>({
    resolver: zodResolver(mailFormSchema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    console.log("submitting", formData);
    setIsLoading(true);

    try {
      const res = await fetch("https://headlessani.vercel.app/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      const mailRes = mailResponseSchema.safeParse(data);

      if (!mailRes.success) {
        console.error(mailRes.error.format());
        throw {
          title: "Error",
          description: "The return data is invalid",
          status: "error",
          apiDescription: "--- The error has been logged ---",
        };
      }

      const { apiDescription, ...toastData } = mailRes.data;
      console.log(apiDescription);
      setToast(toastData);
    } catch (e) {
      console.error(e);
      const mailRes = mailResponseSchema.safeParse(e);

      if (mailRes.success) {
        const { apiDescription, ...toastData } = mailRes.data;
        console.error(apiDescription);
        setToast(toastData);
      } else if (e instanceof TypeError) {
        setToast({
          title: e.name,
          description: e.message,
          status: "error",
        });
      } else {
        setToast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  });

  const userNameError = errors.user_name?.message;
  const userEmailError = errors.user_email?.message;
  const messageError = errors.message?.message;

  return (
    <>
      <Form.Root
        className="bg-card mb-10 flex flex-[2] flex-col gap-5 rounded-xl p-10 shadow-xl"
        onSubmit={onSubmit}
      >
        <h3 className="text-xl font-bold">Send me a message!</h3>
        <FormField name="user_name" serverInvalid={!!userNameError}>
          <FormLabel>Name:</FormLabel>
          <FormGroup
            Icon={BiUser}
            input={
              <input
                className="w-full bg-transparent outline-none"
                type="text"
                placeholder="Name"
                {...register("user_name")}
              />
            }
          />
          {!!userNameError && <FormMessage>{userNameError}</FormMessage>}
        </FormField>

        <FormField name="user_email" serverInvalid={!!userEmailError}>
          <FormLabel>Email:</FormLabel>
          <FormGroup
            Icon={MdOutlineEmail}
            input={
              <input
                className="w-full bg-transparent outline-none"
                type="email"
                placeholder="Email"
                {...register("user_email")}
              />
            }
          />
          <Form.Message
            match={"typeMismatch"}
            forceMatch={!!userEmailError}
            className={`text-red text-sm`}
          >
            {userEmailError || "Please enter a valid email"}
          </Form.Message>
        </FormField>

        <FormField name="message" serverInvalid={!!messageError}>
          <FormLabel>Message:</FormLabel>
          <FormGroup
            Icon={MdOutlineMessage}
            input={
              <textarea
                className="w-full bg-transparent indent-6 outline-none"
                placeholder="Please enter your message"
                rows={3}
                {...register("message")}
              />
            }
          />
          {!!messageError && <FormMessage>{messageError}</FormMessage>}
        </FormField>
        <Form.Submit
          type="submit"
          disabled={isLoading}
          className={`duration-ease flex w-min items-center gap-3 rounded-lg bg-gray-300 p-3 font-semibold hover:bg-gray-400/60 dark:bg-gray-800 dark:hover:bg-gray-700 ${
            isLoading ? "opacity-50" : "opacity-100"
          }`}
        >
          <MdSend className="text-purple" />
          {isLoading ? "Submitting..." : "Send"}
        </Form.Submit>
        <div>
          <Toast toastProps={toastProps} setToast={setToast} />
        </div>
      </Form.Root>
    </>
  );
};
export default ContactForm;
