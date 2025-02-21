import React from "react";
import Professional from "./Professional";
import professionalsData from "./ProfessionalsData";

const ProfessionalsList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

export default ProfessionalsList;
