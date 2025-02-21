import React from "react";

const FooterLink = ({ href, src, alt, description }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-rigth justify-center"
    >
      <img src={src} alt={alt} className="m-2"></img>
      {description}
    </a>
  );
};

export default FooterLink;
