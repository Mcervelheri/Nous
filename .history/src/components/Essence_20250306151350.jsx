import React from "react";
import EssenceList from "./EssenceList";

const Mission = ({ type }) => {
  return (
    <div id="missao" className="py-16 relative bg-[#f3f1ed] z-20">
      <div className="container mx-auto sm:py-6 text-center ">
        <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
          {type === "Essence" ? "Nossa Essência" : ""}
        </h2>
        <div
          className={`grid md:grid-cols-3 lg:mx-20 gap-8 ${
            type === "Informations" ? "gap-12" : ""
          }`}
        >
          <EssenceList type={type} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
