import { Flex, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ContactLogo from "./ContactLogo";

const index = () => {
  return (
    <>
      <Text my={10} fontSize="lg">
        If you have any queries, feel free to send a message below.
      </Text>
      <Flex justify="center" align="center" gap={20}>
        <ContactLogo />
        <ContactForm />
      </Flex>
    </>
  );
};
export default index;
