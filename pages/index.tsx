import Head from "next/head";
import NavLinks from "../components/Nav/";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Form from "../components/Contact";
import Fab from "../components/Fab";
import GHButton from "../components/GHButton";
import type { NextPage } from "next";

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

      <div className="container mx-auto max-w-5xl p-5">
        <NavLinks />
        <Header />

        <h2 id="projects" className="mb-10 mt-20 text-4xl font-black">
          Projects
        </h2>
        <Projects />

        <h2 id="projects" className="mb-10 mt-20 text-4xl font-black">
          Technologies
        </h2>
        <Technologies />

        <h2 id="contact" className="mt-20 text-4xl font-black">
          Contact
        </h2>
        <Form />

        <GHButton />
        <Fab />
      </div>
    </>
  );
};

export default Home;
