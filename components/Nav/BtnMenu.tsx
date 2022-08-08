import { Button, Flex, Link } from "@chakra-ui/react";

const BtnMenu = () => {
  return (
    <Flex display={{ base: "none", md: "flex" }}>
      <Button as={Link} variant="ghost" href="#projects">
        Projects
      </Button>
      <Button as={Link} variant="ghost" href="#techonologies">
        Technologies
      </Button>
      <Button as={Link} variant="ghost" href="#contact">
        Contact
      </Button>
    </Flex>
  );
};

export default BtnMenu;
