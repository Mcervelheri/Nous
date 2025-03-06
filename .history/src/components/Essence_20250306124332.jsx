import React from "react";
import EssenceList from "./EssenceList";

const Mission = ({ type }) => {
  return (
    <div id="missao" className="py-16 relative bg-[#f3f1ed] z-20">
      <div className="container mx-auto text-center">
        {type === "Informations" && (
          <div className="flex justify-center mb-6">
            <div className="bg-[#6eada5] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                src="/caminho/do/icone.svg"
                alt="Ícone"
                className="w-12 h-12"
              />
            </div>
          </div>
        )}
        <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
          {type === "Essence" ? "Nossa Essência" : ""}
        </h2>
        <div className="grid md:grid-cols-3 lg:mx-20 gap-8">
          <EssenceList type={type} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
