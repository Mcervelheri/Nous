const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Ansiedade & Estresse",
    description: "Técnicas práticas da TCC para controlar crises de ansiedade, reduzir o estresse e recuperar a tranquilidade no dia a dia.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: "Autoestima & Autoconhecimento",
    description: "Descubra seu valor, construa uma autoimagem saudável e desenvolva confiança para viver relações mais equilibradas.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Relacionamentos & Casais",
    description: "Melhore a comunicação, resolva conflitos e reconecte-se com seu parceiro(a) através de uma terapia focada em resultados.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        <path d="M4 15s1 0 2 1 3 2 4 1"/>
        <circle cx="12" cy="4" r="2"/>
        <path d="M12 6v2"/>
        <path d="M9 12h6"/>
      </svg>
    ),
    title: "Crianças & Adolescentes",
    description: "Atendimento especializado que respeita a individualidade de cada criança, ajudando no desenvolvimento emocional e social.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    title: "Depressão",
    description: "Acompanhamento terapêutico para superar a depressão, resgatar a motivação e encontrar sentido e prazer na vida novamente.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5e4031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
      </svg>
    ),
    title: "Luto & Perdas",
    description: "Suporte acolhedor para processar perdas, lidar com o luto e encontrar caminhos para seguir em frente com mais leveza.",
  },
];

const Services = () => {
  return (
    <div id="servicos" className="relative bg-white py-16 z-20">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold mb-2 text-[#5e4031]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Como Podemos Te Ajudar
        </h2>
        <p className="text-gray-500 mb-10 text-sm max-w-xl mx-auto">
          Trabalhamos com diversas demandas emocionais utilizando a Terapia Cognitivo-Comportamental (TCC)
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-20 max-sm:px-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#f3f1ed] rounded-xl p-6 text-left
                         hover:bg-[#5e4031] transition-all duration-500 cursor-default
                         hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 
                              group-hover:bg-[#bb947e] transition-all duration-500 shadow-sm">
                <div className="group-hover:[&_svg]:stroke-white transition-all duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#5e4031] mb-2 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/554498379833"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5e4031] text-white px-8 py-3.5 rounded-full font-medium
                       hover:bg-[#4a3328] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Agendar Primeira Consulta
          </a>
          <p className="text-xs text-gray-400 mt-3">Primeira sessão sem compromisso. Tire suas dúvidas.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
