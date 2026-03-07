import React from "react";
import Hero from "../components/Hero";
import Rooms from "../components/Rooms";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Rooms />
      <About />
      <Contact />
    </>
  );
}

export default Home;