import { useState } from "react";

const faqData = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta. Nela, a psicóloga vai entender sua história, suas queixas e suas expectativas. Não é necessário ter um diagnóstico prévio. A partir daí, traçamos juntos um plano terapêutico personalizado.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "Atualmente trabalhamos com atendimento particular. Oferecemos valores acessíveis e possibilidade de emissão de recibo para reembolso junto ao seu plano de saúde. Entre em contato para saber mais sobre nossos valores.",
  },
  {
    question: "Como funciona a terapia online?",
    answer:
      "A terapia online acontece por videochamada em uma plataforma segura e sigilosa. Funciona da mesma forma que o atendimento presencial, com a mesma qualidade e eficácia. Você só precisa de um lugar tranquilo e uma boa conexão de internet.",
  },
  {
    question: "A partir de que idade vocês atendem crianças?",
    answer:
      "Atendemos crianças a partir de 4 anos de idade. O atendimento infantil é feito de forma lúdica, respeitando o ritmo e a individualidade de cada criança. Os pais/responsáveis também participam do processo terapêutico.",
  },
  {
    question: "Com que frequência devo ir à terapia?",
    answer:
      "Normalmente iniciamos com sessões semanais, que é a frequência recomendada para um bom progresso terapêutico. Com o tempo, e de acordo com a evolução do tratamento, a frequência pode ser ajustada para quinzenal.",
  },
  {
    question: "O que é Terapia Cognitivo-Comportamental (TCC)?",
    answer:
      "A TCC é uma abordagem terapêutica baseada em evidências científicas que trabalha a relação entre pensamentos, emoções e comportamentos. É uma terapia focada, prática e com resultados comprovados para diversas demandas como ansiedade, depressão, fobias e questões de autoestima.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="faq" className="relative bg-white py-16 z-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2
          className="text-3xl font-bold mb-2 text-[#5e4031] text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Perguntas Frequentes
        </h2>
        <p className="text-gray-500 mb-10 text-sm text-center">
          Tire suas dúvidas antes de agendar
        </p>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="border border-[#e8e0d8] rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left
                           hover:bg-[#f9f7f5] transition-colors duration-200"
              >
                <span className="font-medium text-[#5e4031] text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bb947e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">
            Ainda tem dúvidas? Fale diretamente conosco:
          </p>
          <a
            href="https://wa.me/554498379833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5e4031] font-medium hover:text-[#bb947e] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.591-.838-6.311-2.236l-.44-.366-3.065 1.027 1.027-3.065-.366-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
