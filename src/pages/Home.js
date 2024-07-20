import React from "react";
import Header from "../components/Header";
import ParticlesComponent from "../components/Particles";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Footer />
      <ParticlesComponent id="tsparticles" />
    </div>
  );
}

export default Home;
