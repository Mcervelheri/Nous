import React from "react";
import FooterLinksList from "./FooterLinksList";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#5e4031] text-white pt-6 mt-auto relative z-20">
    <div className="container mx-auto text-center">
      <div>
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <FooterLinksList />
      </div>
    </div>
</Footer>
  );
};

export default Footer;
