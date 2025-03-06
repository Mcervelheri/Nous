import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = (type) => {
  return (
    <>
      {EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} type />
      ))}
    </>
  );
};

export default EssenceList;
