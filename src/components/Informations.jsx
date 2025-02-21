import React from "react";

const Information = () => {
  return (
    <div id="Informacoes" className="relative bg-[#f3f1ed] py-6 z-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">
          Publico atendido
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Crianças, adolescentes e adultos.
        </p>
        <br></br>
        <h2 className="text-3xl font-bold mb-6 text-[#5e4031]">Horários</h2>
        <p>Segunda-feira à sexta 08:00 às 20:00</p>
        <p>Sabado das 08:00 às 12:00</p>
      </div>
    </div>
  );
};

export default Information;
