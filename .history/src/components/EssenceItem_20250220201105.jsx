import React from "react";

const EssenceItens = ({ item, text }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">{item}</h3>
      <p>{text}</p>
    </div>
  );
};

export default EssenceItens;
