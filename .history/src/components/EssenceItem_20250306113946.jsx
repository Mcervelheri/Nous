import React from "react";

const EssenceItem = ({ item, text }) => {
  return (
    <div className="bg-[#bb947e] shadow rounded h-full">
      <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">{item}</h3>
      <p>{text}</p>
    </div>
  );
};

export default EssenceItem;
