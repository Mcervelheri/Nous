import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    {EssenceItensData.map((Item, index) => (
        <EssenceItem 
        item={item}
        texto={texto}
        />
    )) }
  );
};

export default EssenceList;
