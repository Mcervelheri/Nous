import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    {EssenceItensData.map((title, index) => (
        <EssenceItem 
        title={title}
        texto={texto}
        />
    )) }
  );
};

export default EssenceList;
