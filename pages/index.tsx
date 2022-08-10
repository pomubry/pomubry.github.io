import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import NavLinks from "../components/Nav/";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

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
      </Container>
    </>
  );
};

export default Home;
