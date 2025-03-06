import React from "react";

const EssenceItem = ({ item, text, type }) => {
  return (
    <div className="bg-[#bb947e] shadow-lg rounded py-5">
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
      <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">{item}</h3>
      <p className="px-5">{text}</p>
    </div>
  );
};

export default EssenceItem;
