import React from "react";
import EssenceItem from "./EssenceItem";
import { EssenceItensData, InformationItensData } from "./EssenceItensData";

const EssenceList = (type) => {
  return (
    <>
      {EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
    </>
  );
};

export default EssenceList;
