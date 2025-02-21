import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
      <p className="mb-4">
        <a
          href="https://www.instagram.com/clinicapsiconous"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src={instagram} alt="instagram" className="m-2"></img>
          @clinicapsiconous
        </a>
        <a
          href="https://wa.me/554498379833"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src={whatsapp} alt="whatsapp" className="m-2"></img>
          Telefone: (44) 99837-9833
        </a>
        <div className="flex items-center justify-center">
          <img src={email} alt="email" className="m-2"></img>
          Email: clinica.psi.nous@gmail.com
        </div>
        <a
          href="https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <img src={endereco} alt="endereço" className="m-2"></img>
          Endereço: Rua Rio Jacuí 310, Parque Residencial Tuiuti.
        </a>
        <a
          href="https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          CEP: 87043160
        </a>
      </p>
      <a
        href="/formulario"
        className="bg-[#bb947e] text-white px-6 py-3 rounded-lg hover:bg-[#c79165]"
      >
        Agende sua sessão
      </a>
    </div>
  );
};

export default Contact;
