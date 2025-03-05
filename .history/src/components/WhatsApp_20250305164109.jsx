import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "/src/assets/logos/logo-nous_redondo.png";

const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="554498379833"
        accountName="Clínica Nous"
        avatar={logo}
        statusMessage=""
      />
    </div>
  );
};

export default WhatsApp;
