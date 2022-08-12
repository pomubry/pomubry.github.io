import { Heading } from "@chakra-ui/react";

const ContactLogo = () => {
  return (
    <Heading
      as="h5"
      userSelect="none"
      fontSize="9xl"
      display={{ base: "none", md: "block" }}
    >
      BT
    </Heading>
  );
};
export default ContactLogo;
