import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiSass,
} from "react-icons/si";
import Tag from "./Tag";

const Icon = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box borderRadius="xl" bgColor={bgColor} boxShadow="dark-lg" p={10}>
      <Heading as="h3">Primary</Heading>
      <Flex justify="space-around" flexWrap="wrap" gap={3} my={5}>
        <Tag label="React" icon={SiReact} />
        <Tag label="NextJS" icon={SiNextdotjs} />
        <Tag label="TypeScript" icon={SiTypescript} />
      </Flex>

      <br />

      <Heading as="h3">Secondary</Heading>
      <Flex justify="space-around" flexWrap="wrap" gap={3} my={5}>
        <Tag label="Sass" icon={SiSass} />
        <Tag label="ExpressJS" icon={SiExpress} />
        <Tag label="MongoDB" icon={SiMongodb} />
      </Flex>
    </Box>
  );
};
export default Icon;
