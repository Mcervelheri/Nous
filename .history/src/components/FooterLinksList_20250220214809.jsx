import React from "react";
import FooterLinkData from "./FooterLinkData";
import FooterLink from "./FooterLink";

const FooterLinksList = () => {
  return (
    <div className="flex items-center gap-2">
      {FooterLinkData.map((FooterLinksList, index) => (
        <FooterLink key={index} {...FooterLinksList} />
      ))}
    </div>
  );
};

export default FooterLinksList;
