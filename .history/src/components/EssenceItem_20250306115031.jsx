import React from "react";

const EssenceItem = ({ item, text }) => {
  return (
    <div className="bg-[#bb947e] shadow-lg rounded py-5">
      <h3 className="text-2xl font-semibold mb-4 text-[##0]">{item}</h3>
      <p className="px-5">{text}</p>
    </div>
  );
};

export default EssenceItem;
