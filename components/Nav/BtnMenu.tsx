import { Button, Flex } from "@chakra-ui/react";

const BtnMenu = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }}>
      <Button as="a" variant="ghost" href="#projects">
        Projects
      </Button>
      <Button as="a" variant="ghost" href="#techonologies">
        Technologies
      </Button>
      <Button as="a" variant="ghost" href="#contact">
        Contact
      </Button>
    </Flex>
  );
};

export default BtnMenu;
