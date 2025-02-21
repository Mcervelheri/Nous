import React from "react";
import instagram from "src/assets/icones/instagram.png";
import whatsapp from "src/assets/icones/whatsapp.png";
import mail from "src/assets/icones/email.png";
import address from "src/assets/icones/endereco.png";

const FooterLinkData = [
  {
    href: "https://www.instagram.com/clinicapsiconous",
    src: { instagram },
    alt: "Instagram",
    description: "@clinicapsiconous",
  },
  {
    href: "https://wa.me/554498379833",
    src: { whatsapp },
    alt: "Whatsapp",
    description: "Telefone: (44) 99837-9833",
  },
  {
    href: "mailto:seuemail@exemplo.com",
    src: { mail },
    alt: "Email",
    description: "",
  },
  {
    href: "",
    src: "",
    alt: "",
    description: "",
  },
];

export default FooterLinkData;
