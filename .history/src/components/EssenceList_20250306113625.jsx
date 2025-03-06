import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    <div className="flex flex col-auto">
      {EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
    </div>
  );
};

export default EssenceList;
