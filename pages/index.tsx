import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import NavLinks from "../components/Nav/NavLinks";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bryan Taduran</title>
        <meta
          name="description"
          content="A simple portfolio showing my projects and abilities."
        />
        <meta name="author" content="Bryan Taduran" />
        <meta
          name="keywords"
          content="Bryan Taduran, Portfolio, Projects, Contacts, Technologies, React"
        />
      </Head>
      <Container maxW="5xl">
        <NavLinks />
      </Container>
    </>
  );
};

export default Home;
