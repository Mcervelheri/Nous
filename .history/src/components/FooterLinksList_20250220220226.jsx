import React from "react";
import FooterLinkData from "./FooterLinkData";
import FooterLink from "./FooterLink";

const FooterLinksList = () => {
  return (
    <div className="mb-4 lg:ml-48">
      {FooterLinkData.map((FooterLinksList, index) => (
        <FooterLink key={index} {...FooterLinksList} />
      ))}
    </div>
  );
};

export default FooterLinksList;
