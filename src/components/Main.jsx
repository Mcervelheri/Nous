import "react";
import Home from "./Home";
import About from "./About";
import Professionals from "./Professionals";
import Essence from "./Essence";
import Services from "./Services";

import FAQ from "./FAQ";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Essence type="Informations" />
      <Professionals />

      <Essence type="Essence" />
      <FAQ />
    </>
  );
};

export default Main;
