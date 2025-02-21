import React from "react";
import EssenceItens from "./EssenceItens";

const Mission = () => {
  return (
    <div id="missao" className="py-16 relative bg-[#f3f1ed] z-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
          Nossa Essência
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <EssenceItens
            item="Missão"
            text="Oferecer cuidado psicológico de excelência, promovendo o
              autoconhecimento, a saúde emocional e o bem-estar dos nossos
              clientes."
          />
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">
              Visão
            </h3>
            <p>
              Ser referência em saúde mental e atendimento psicológico,
              contribuindo para uma sociedade mais saudável e consciente.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#5e4031]">
              Valores
            </h3>
            <p>
              Empatia, ética, acolhimento, compromisso com a ciência, respeito à
              diversidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
