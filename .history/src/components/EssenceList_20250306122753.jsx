import React from "react";
import EssenceItem from "./EssenceItem";
import { EssenceItensData, InformationItensData } from "./EssenceItensData";

const EssenceList = (type) => {
  console.log("Type recebido no EssenceList:", type);
  const data =
    type === "Essence"
      ? EssenceItensData
      : type === "Informations"
      ? InformationItensData
      : [];

  return (
    <>
      {data.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
    </>
  );
};

export default EssenceList;
