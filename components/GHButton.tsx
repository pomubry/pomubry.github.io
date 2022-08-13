import { Button, Icon } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const GHButton = () => {
  return (
    <Button
      as="a"
      href="https://github.com/pomubry"
      target="_blank"
      rel="noopener"
      rightIcon={<Icon as={BsGithub} />}
    >
      Github
    </Button>
  );
};
export default GHButton;
