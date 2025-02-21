import "react";
import Home from "./Home";
import About from "./About";
import Informations from "./Informations";
import { ProfessionalsList } from "./ProfessionalsList";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Informations />
      <ProfessionalsList />
    </>
  );
};

export default Main;
