import {
  Button,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub, BsLink } from "react-icons/bs";

interface ProjectProps {
  title: string;
  img: string;
  desc: string;
  github: string;
  site: string | null;
  index: number;
}

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  desc,
  github,
  site,
  index,
}) => {
  const bgColor = useColorModeValue("gray.200", "gray.900");
  const isEven = index % 2 === 0;
  return (
    <Grid
      templateColumns={["1fr", null, "1fr 1fr"]}
      alignItems="center"
      gap={5}
      my={10}
      p={8}
      overflow="hidden"
      borderColor="purple.500"
      borderRadius="xl"
      bgColor={bgColor}
      boxShadow="dark-lg"
    >
      {/* Image */}
      <GridItem justifySelf="center" order={{ base: 1, md: isEven ? 1 : 2 }}>
        <Image src={img} alt={title} borderRadius="xl" />
      </GridItem>

      {/* Description */}
      <GridItem order={{ base: 2, md: isEven ? 2 : 1 }}>
        <Heading as="h3">{title}</Heading>
        <Text whiteSpace="pre-line" mt={2} mb={5}>
          {desc}
        </Text>
        <Button
          as="a"
          href={github}
          target="_blank"
          rel="noopener"
          rightIcon={<Icon as={BsGithub} />}
          size={{ base: "sm", sm: "md" }}
          mr={{ base: 3 }}
        >
          Github
        </Button>
        {site && (
          <Button
            as="a"
            href={site}
            target="_blank"
            rel="noopener"
            rightIcon={<Icon as={BsLink} />}
            size={{ base: "sm", sm: "md" }}
          >
            App
          </Button>
        )}
      </GridItem>
    </Grid>
  );
};
export default Project;
