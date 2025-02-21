import React from "react";
import FooterLinkData from "./FooterLinkData";
import FooterLink from "./FooterLink";

const FooterLinksList = () => {
  return (
    <p className="mb-4">
        {FooterLinkData.map(FooterLinksList, index) => (
            <FooterLink key={index} {...FooterLinksList}/>
        )}
    </p>
  );
};

export default FooterLinksList;
