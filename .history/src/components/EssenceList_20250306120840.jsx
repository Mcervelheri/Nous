import React from "react";
import EssenceItem from "./EssenceItem";
import { EssenceItensData, InformationItensData } from "./EssenceItensData";

const EssenceList = (type) => {
  return (
    <>
      {if (type == "Essence"){ EssenceItensData.map((item, index) => (
        <EssenceItem key={index} {...item} />
      ))}
      else {
        InformationItensData.map((item, index) => (
          <EssenceItem key={index} {...item} />
        ))
      }
      }
    </>
  );
};

export default EssenceList;
