import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "/src/assets/logos/PerfilWhatsApp.png";

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
        placeholder="Escreva uma mensagem.."
        style={backgroudcolor: #5e4031}
      />
    </div>
  );
};

export default WhatsApp;
