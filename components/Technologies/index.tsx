import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import TagContainer from "./TagContainer";

const Technologies = () => {
  return (
    <Box
      display="grid"
      gap={10}
      gridTemplateColumns={{ md: "1fr 1fr" }}
      alignItems="center"
    >
      <Box>
        <Heading as="h3" textAlign="center">
          These are what I have used so far...
        </Heading>
        <Divider my={5} borderRadius="full" border="5px solid yellow" />
        <Text fontWeight={600} textAlign="center">
          I&apos;m mostly familiar with React for the frontend, while I know
          just enough to make a functional API with Express.js for the backend,
          and MongoDB for the database.
        </Text>
      </Box>
      <TagContainer />
    </Box>
  );
};
export default Technologies;
