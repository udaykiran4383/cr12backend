import React from "react";
import Header from "../components/Header";
import ParticlesComponent from "../components/Particles";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ParticlesComponent id="tsparticles" />
    </div>
  );
}

export default Home;
