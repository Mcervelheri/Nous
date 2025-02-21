import React from "react";
import FooterLinksList from "./FooterLinksList";
import Map from "./Map";
import CopyWrite from "./CopyWrite";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="bg-[#5e4031] text-white pt-6 mt-auto relative z-20"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <FooterLinksList />
          <a
            href="/formulario"
            className="bg-[#bb947e] text-white px-6 py-3 rounded-lg hover:bg-[#c79165]"
          >
            Agende sua sessão
          </a>
        </div>
        <Map />
      </div>
      <CopyWrite />
    </footer>
  );
};

export default Footer;
