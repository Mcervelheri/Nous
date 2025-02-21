import React from "react";
import instagram from "src/assets/icones/instagram.png";
import whatsapp from "src/assets/icones/whatsapp.png";
import mail from "src/assets/icones/email.png";
import address from "src/assets/icones/endereco.png";

const FooterLinkData = [
  {
    href: "https://www.instagram.com/clinicapsiconous",
    src: instagram,
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
    href: "mailto:clinica.psi.nous@gmail.com",
    src: { mail },
    alt: "Email",
    description: "clinica.psi.nous@gmail.com",
  },
  {
    href: "https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9",
    src: { address },
    alt: "Endereço",
    description: "Rua Rio Jacuí 310, Parque Residencial Tuiuti. CEP: 87043160",
  },
];

export default FooterLinkData;
