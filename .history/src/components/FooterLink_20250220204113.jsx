import React from "react";

const FooterLink = () => {
  return (
    <a
      href="https://maps.app.goo.gl/mNjhGvmNRAyKF6jt9"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center"
    >
      <img src={endereco} alt="endereço" className="m-2"></img>
      Endereço: Rua Rio Jacuí 310, Parque Residencial Tuiuti.
    </a>
  );
};

export default FooterLink;
