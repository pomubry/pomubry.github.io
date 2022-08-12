import { Button, Container, Heading, Icon } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import NavLinks from "../components/Nav/";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Form from "../components/Contact";
import Fab from "../components/Fab";
import { BsGithub } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bryan Taduran</title>
        <meta
          name="description"
          content="A simple portfolio for my projects and stuff."
        />
        <meta name="author" content="Bryan Taduran" />
        <meta
          name="keywords"
          content="Bryan Taduran, Portfolio, Projects, Contacts, Technologies, React"
        />
      </Head>

      <Container maxW="5xl" py={5}>
        <NavLinks />
        <Header />

        <Heading id="projects" mt={20} mb={10}>
          Projects
        </Heading>
        <Projects />

        <Heading id="technologies" mt={20} mb={10}>
          Technologies
        </Heading>
        <Technologies />

        <Heading id="contact" mt={20}>
          Contact
        </Heading>
        <Form />

        <Button
          as="a"
          href="https://github.com/pomubry"
          target="_blank"
          rel="noopener"
          rightIcon={<Icon as={BsGithub} />}
        >
          Github
        </Button>

        <Fab />
      </Container>
    </>
  );
};

export default Home;
