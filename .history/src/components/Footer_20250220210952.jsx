import React from "react";
import FooterLinksList from "./FooterLinksList";

const Footer = () => {
  return (
    <div className="container mx-auto text-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <FooterLinksList />
      </div>
    </div>
  );
};

export default Footer;
