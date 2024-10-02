import React from "react";
import { About, Navbar, Hero, Location, Footer } from "./components";

const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Footer />
    </div>
  );
};

export default Main;
