import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

const ProfessionalsList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {professionalsData.map((professional, index) => (
        <Professional key={index} {...professional} />
      ))}
    </div>
  );
};

export default ProfessionalsList;
