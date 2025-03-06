import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    <>
      {EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
    </>
  );
};

export default EssenceList;
