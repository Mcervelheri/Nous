import React from "react";
import EssenceItem from "./EssenceItem";
import EssenceItensData from "./EssenceItensData";

const EssenceList = () => {
  return (
    {EssenceItensData.map((EssenceItem, index) => (
        <EssenceItem 
        {EssenceItem}
        />
    )) }
  );
};

export default EssenceList;
