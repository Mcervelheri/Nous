import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

export const ProfessionalsList = () => {
  return (
    <div className="grid-cols-1 md:grid-cols-2 gap-6">
      {professionalsData.map((professional, index) => (
        <Professional
          key={index}
          img={professional.img}
          name={professional.name}
          crp={professional.crp}
          text1={professional.text1}
          text2={professional.text2}
        />
      ))}
    </div>
  );
};
