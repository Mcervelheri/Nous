import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    <div className="">
      {EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
    </div>
  );
};

export default EssenceList;
