import React, { FormEventHandler, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import { MdOutlineEmail, MdOutlineMessage, MdSend } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { bodySchema, bodyType } from "../../lib/utils";

interface EmailRes {
  title: string;
  description: string;
  status?: "info" | "warning" | "success" | "error" | "loading";
  apiDescription: string;
}

type SubmitHandler = FormEventHandler<HTMLDivElement> &
  FormEventHandler<HTMLFormElement>;

const initialError = {
  user_name: "",
  user_email: "",
  message: "",
};

const toastProps: UseToastOptions = {
  duration: 9000,
  position: "bottom-left",
  isClosable: true,
};

const color = "purple.500";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<bodyType>(initialError);
  const toast = useToast();
  const bgColor = useColorModeValue("gray.100", "gray.900");

  const handleSubmit: SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(initialError);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const formDataValue = Object.fromEntries(formData.entries());
    const parsedBody = bodySchema.safeParse(formDataValue);

    if (!parsedBody.success) {
      const fieldErrors = parsedBody.error.formErrors.fieldErrors;
      const errors = Object.keys(fieldErrors).reduce(
        (acc, cur) => {
          const key = cur as keyof bodyType;
          acc[key] = fieldErrors[key]![0];
          return acc;
        },
        { ...initialError }
      );
      setIsLoading(false);
      return setFormError(errors);
    }

    try {
      const res = await fetch("https://headlessani.vercel.app/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedBody.data),
      });
      const data = (await res.json()) as EmailRes;
      const { apiDescription, ...toastData } = data;
      toast({
        ...toastData,
        ...toastProps,
      });
    } catch (e) {
      console.error(e);
      if (e instanceof TypeError) {
        toast({
          ...toastProps,
          title: e.name,
          description: e.message,
          status: "error",
        });
      } else if ((e as EmailRes)?.apiDescription?.length > 0) {
        const { apiDescription, ...toastData } = e as EmailRes;
        toast({
          ...toastProps,
          ...toastData,
        });
      } else {
        toast({
          ...toastProps,
          title: "Error",
          description: "Something went wrong",
          status: "error",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gap={3}
      mb={10}
      p={8}
      flex={2}
      bgColor={bgColor}
      borderColor={color}
      borderRadius="xl"
      boxShadow="dark-lg"
      onSubmit={handleSubmit}
    >
      <Heading as="h3" size="md">
        Send me a message!
      </Heading>

      <FormControl isInvalid={!!formError.user_name.length}>
        <InputGroup borderColor={color}>
          <InputLeftElement pointerEvents="none" color={color}>
            <BiUser />
          </InputLeftElement>
          <Input
            type="text"
            name="user_name"
            placeholder="Name"
            defaultValue={""}
            focusBorderColor={color}
            required
          />
        </InputGroup>
        {!!formError.user_name.length && (
          <FormErrorMessage>{formError.user_name}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!formError.user_email.length}>
        <InputGroup borderColor={color}>
          <InputLeftElement pointerEvents="none" color={color}>
            <MdOutlineEmail />
          </InputLeftElement>
          <Input
            type="email"
            name="user_email"
            defaultValue={""}
            placeholder="Email"
            focusBorderColor={color}
            required
          />
        </InputGroup>
        {!!formError.user_email.length && (
          <FormErrorMessage>{formError.user_email}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!formError.message.length}>
        <InputGroup borderColor={color}>
          <InputLeftElement pointerEvents="none" color={color}>
            <MdOutlineMessage />
          </InputLeftElement>
          <Textarea
            name="message"
            placeholder="Please enter your message"
            focusBorderColor={color}
            rows={5}
            required
            defaultValue={""}
            sx={{ textIndent: 25 }}
          />
        </InputGroup>
        {!!formError.message.length && (
          <FormErrorMessage>{formError.message}</FormErrorMessage>
        )}
      </FormControl>

      <Button
        type="submit"
        w="min"
        leftIcon={<MdSend />}
        variant="solid"
        isLoading={isLoading}
        isDisabled={isLoading}
        loadingText="Submitting"
      >
        Send
      </Button>
    </Box>
  );
};
export default ContactForm;
