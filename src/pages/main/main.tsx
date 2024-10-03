import React from "react";
import { About, Navbar, Hero, Location, Footer, Phone } from "./components";

const Main: React.FC = () => {
  return (
    <div>
      <Phone />
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Main;
