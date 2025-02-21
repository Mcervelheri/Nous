import React from "react";
import FooterLinksList from "./FooterLinksList";
import Map from "./Map";
import CopyWrite from "./CopyWrite";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#5e4031] text-white py-10">
      <div className="container mx-auto text-rigth">
        <div>
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <FooterLinksList />
        </div>
        <Map />
      </div>
      <CopyWrite />
    </footer>
  );
};

export default Footer;
