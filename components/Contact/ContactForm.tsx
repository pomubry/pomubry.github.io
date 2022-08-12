import React, { useState } from "react";
import {
  Box,
  Button,
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
import emailjs from "@emailjs/browser";

const toastProps: UseToastOptions = {
  duration: 9000,
  position: "bottom-left",
  isClosable: true,
};

const color = "purple.500";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const bgColor = useColorModeValue("gray.100", "gray.900");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_2cfy11v",
        "template_d6g04ga",
        e.target as HTMLFormElement,
        "zdluO3hAdkIaOKCgi"
      );
      toast({
        title: "Success!",
        description: "Thanks for your time. Your message has been sent!",
        status: "success",
        ...toastProps,
      });
    } catch (err) {
      const error = err as { text: string };
      toast({
        title: "Failed!",
        description: "Sorry. Something went wrong with the message.",
        status: "error",
        ...toastProps,
      });
      console.error(error.text);
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
      p={10}
      bgColor={bgColor}
      borderColor={color}
      borderRadius="xl"
      boxShadow="dark-lg"
      onSubmit={handleSubmit}
    >
      <Heading as="h3" size="md">
        Send me a message!
      </Heading>

      <InputGroup borderColor={color}>
        <InputLeftElement pointerEvents="none" color={color}>
          <BiUser />
        </InputLeftElement>
        <Input
          type="text"
          name="user_name"
          placeholder="Name"
          focusBorderColor={color}
          required
        />
      </InputGroup>

      <InputGroup borderColor={color}>
        <InputLeftElement pointerEvents="none" color={color}>
          <MdOutlineEmail />
        </InputLeftElement>
        <Input
          type="email"
          name="user_email"
          placeholder="Email"
          focusBorderColor={color}
          required
        />
      </InputGroup>

      <InputGroup borderColor={color}>
        <InputLeftElement pointerEvents="none" color={color}>
          <MdOutlineMessage />
        </InputLeftElement>

        <Textarea
          name="message"
          placeholder="Please enter your message"
          focusBorderColor={color}
          required
          sx={{ textIndent: 25 }}
        />
      </InputGroup>

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
