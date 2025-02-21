import React from "react";

const Professional = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div>
        <img
          src={Stefany}
          alt="Stefany Oliveira"
          className="w-full img_meninas object-cover object-top rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold my-4 text-[#5e4031]">
        Stefany Oliveira
      </h3>
      <p className="mb-4">
        (CRP - 08/41494)
        <br></br>
        <br></br>
        Como profissional da saúde mental, minha missão é ajudar você a superar
        desafios emocionais e comportamentais, promovendo bem-estar e qualidade
        de vida. Trabalho com a Terapia Cognitivo-Comportamental (TCC).
        <br></br>
        <br></br>
        Se você busca autoconhecimento e autocuidado, estou aqui para te
        acompanhar nesse processo de transformação. Juntos, podemos construir
        estratégias para lidar com suas questões.
      </p>
      <a href="#contato" className="text-[#5e4031] hover:underline">
        Agende sua sessão
      </a>
    </div>
  );
};

export default Professional;
