import React from "react";
import FooterLinkData from "./FooterLinkData";
import FooterLink from "./FooterLink";

const FooterLinksList = () => {
  return (
    <p className="mb-4">
      <div className="flex justify-center">
        {FooterLinkData.map((FooterLinksList, index) => (
          <FooterLink key={index} {...FooterLinksList} />
        ))}
      </div>
    </p>
  );
};

export default FooterLinksList;
