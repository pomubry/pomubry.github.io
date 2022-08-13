import { Heading } from "@chakra-ui/react";

const ContactLogo = () => {
  return (
    <Heading
      as="h5"
      userSelect="none"
      fontSize="9xl"
      flex={1}
      textAlign="right"
      display={{ base: "none", md: "block" }}
    >
      BT
    </Heading>
  );
};
export default ContactLogo;
