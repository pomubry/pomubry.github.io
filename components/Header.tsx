import { Box, Heading, Text } from "@chakra-ui/react";
import GHButton from "./GHButton";

const Header = () => {
  return (
    <Box mt={[10]} maxW={{ sm: "80%", md: "70%" }}>
      <Heading fontSize={["5xl", "6xl", "7xl"]}>Welcome to my profile!</Heading>
      <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold" my={[5]}>
        You may check all the projects that I have done so far
      </Text>
      <Text fontSize={["md", "lg", "xl"]} fontWeight={900} mb={10}>
        You could also take a look at all the technologies that I have used for
        my projects
      </Text>
      <GHButton />
    </Box>
  );
};

export default Header;
