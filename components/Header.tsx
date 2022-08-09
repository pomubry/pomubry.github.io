import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <Box mt={[10]} maxW={{ sm: "80%", md: "70%" }}>
      <Heading fontSize={["5xl", "6xl", "7xl"]}>Welcome to my profile!</Heading>
      <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" my={[5]}>
        See a glimpse of all the projects that I have done so far
      </Text>
      <Text fontSize={["md", "lg", "xl"]} fontWeight={900} mb={10}>
        You could also take a look at all the technologies that I have used for
        my projects.
      </Text>
      <Button
        as="a"
        href="https://github.com/pomubry"
        target="_blank"
        rel="noopener"
        rightIcon={<Icon as={BsGithub} />}
      >
        Github
      </Button>
    </Box>
  );
};

export default Header;
