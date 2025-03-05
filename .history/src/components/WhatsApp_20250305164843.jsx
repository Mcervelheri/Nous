import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "/src/assets/logos/PerfilWhatsApps.png";

const WhatsApp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="554498379833"
        accountName="Clínica Nous"
        avatar={logo}
        statusMessage=""
        chatMessage={`Olá, como vai?\nComo podemos te ajudar?`}
        allowClickAway={true}
        allowEsc={true}
      />
    </div>
  );
};

export default WhatsApp;
