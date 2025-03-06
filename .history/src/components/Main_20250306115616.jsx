import "react";
import Home from "./Home";
import About from "./About";
import Informations from "./Informations";
import Professionals from "./Professionals";
import Essence from "./Essence";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Essence type:Informations />
      <Professionals />
      <Essence type:Essence />
    </>
  );
};

export default Main;
