import React from "react";

const Map = () => {
  return (
    <div className="map-container mt-6 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7272371990225!2d-51.90296751489406!3d-23.39808284194116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd10509058b2f%3A0x8e8996fb5f8ad129!2sR.%20Rio%20Jacu%C3%AD%2C%20310%20-%20Conj.%20Res.%20Branca%20Vieira%2C%20Maring%C3%A1%20-%20PR%2C%2087043-160!5e0!3m2!1spt-BR!2sbr!4v1737847076201!5m2!1spt-BR!2sbr"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
