import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

export const ProfessionalsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {professionalsData.map((professional, index) => (
        <Professional key={index} {...professional} />
      ))}
    </div>
  );
};
