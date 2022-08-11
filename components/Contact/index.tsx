import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineEmail, MdOutlineMessage, MdSend } from "react-icons/md";

const Contact = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const obj = Object.fromEntries(data);
    console.log(obj);
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      gap={3}
      maxW="lg"
      marginInline="auto"
      mb={10}
      p={10}
      bgColor={bgColor}
      borderColor="purple.500"
      borderRadius="xl"
      boxShadow="dark-lg"
      onSubmit={handleSubmit}
    >
      <Heading as="h3" size="md">
        Send me a message!
      </Heading>

      <InputGroup borderColor="purple.500">
        <InputLeftElement pointerEvents="none" color="purple.500">
          <MdOutlineEmail />
        </InputLeftElement>
        <Input
          type="email"
          name="email"
          placeholder="Please enter your email"
          focusBorderColor="purple.500"
          required
        />
      </InputGroup>

      <InputGroup borderColor="purple.500">
        <InputLeftElement pointerEvents="none" color="purple.500">
          <MdOutlineMessage />
        </InputLeftElement>

        <Textarea
          name="message"
          placeholder="Please enter your message"
          focusBorderColor="purple.500"
          required
          sx={{ textIndent: 25 }}
        />
      </InputGroup>

      <Button type="submit" w="min" leftIcon={<MdSend />} variant="solid">
        Send
      </Button>
    </Box>
  );
};
export default Contact;
