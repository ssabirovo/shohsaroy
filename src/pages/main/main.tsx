import React from "react";
import { About, Navbar, Hero, Location, Footer, Phone } from "./components";
import Planirovka from "./components/planirovka";

const Main: React.FC = () => {
  return (
    <div>
      <Phone />
      <Navbar />
      <Hero />
      <Planirovka />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Main;
