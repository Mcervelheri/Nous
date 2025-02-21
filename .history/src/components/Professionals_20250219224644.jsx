import React from "react";
import { ProfessionalsList } from "./ProfessionalsList";

const Professionals = () => {
  return (
    <>
      <div id="profissionais" className="relative bg-[#f3f1ed] py-16 z-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
            Profissionais
          </h2>
          <div className="sm:grid-cols-1 md:grid-cols-3 gap-8">
            <ProfessionalsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Professionals;
