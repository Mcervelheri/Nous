import { useState } from "react";

const testimonials = [
  {
    text: "A terapia na Clínica Nous mudou minha vida. Eu estava passando por um momento muito difícil e a profissional me acolheu de uma forma que eu nunca tinha experimentado. Hoje me sinto muito mais segura e equilibrada.",
    author: "M.S.",
    detail: "Paciente há 1 ano",
    rating: 5,
  },
  {
    text: "Trouxe meu filho para atendimento e a evolução dele foi incrível. A psicóloga soube criar um vínculo com ele de forma muito natural. Recomendo demais para quem tem crianças que precisam de acompanhamento.",
    author: "A.R.",
    detail: "Mãe de paciente",
    rating: 5,
  },
  {
    text: "Eu e minha esposa estávamos em um momento delicado do nosso casamento. A terapia de casal nos ajudou a melhorar nossa comunicação e reconectar. Somos muito gratos pelo trabalho da clínica.",
    author: "L.P.",
    detail: "Terapia de casal",
    rating: 5,
  },
  {
    text: "Comecei a terapia online e me surpreendi com a qualidade do atendimento. É prático, confortável e o resultado é o mesmo. A profissional é muito atenciosa e competente.",
    author: "C.F.",
    detail: "Atendimento online",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-3 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "#d4a574" : "#ddd"}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="depoimentos" className="relative bg-[#5e4031] py-16 z-20">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl font-bold mb-2 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          O Que Nossos Pacientes Dizem
        </h2>
        <p className="text-[#d4b89c] mb-10 text-sm">
          Depoimentos reais de quem transformou sua vida com a Clínica Nous
        </p>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mx-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10
                         hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <StarRating rating={t.rating} />
              <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-white/20 pt-3">
                <p className="text-[#d4b89c] font-semibold text-sm">{t.author}</p>
                <p className="text-white/50 text-xs">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left border border-white/10 mx-4">
            <StarRating rating={testimonials[activeIndex].rating} />
            <p className="text-white/90 text-sm leading-relaxed mb-4 italic min-h-[120px]">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="border-t border-white/20 pt-3">
              <p className="text-[#d4b89c] font-semibold text-sm">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-white/50 text-xs">
                {testimonials[activeIndex].detail}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#d4b89c] scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust numbers */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#d4b89c]" style={{ fontFamily: "'Playfair Display', serif" }}>3+</p>
            <p className="text-white/60 text-xs mt-1">Profissionais</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#d4b89c]" style={{ fontFamily: "'Playfair Display', serif" }}>500+</p>
            <p className="text-white/60 text-xs mt-1">Sessões Realizadas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#d4b89c]" style={{ fontFamily: "'Playfair Display', serif" }}>2</p>
            <p className="text-white/60 text-xs mt-1">Modalidades</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#d4b89c]" style={{ fontFamily: "'Playfair Display', serif" }}>⭐ 5.0</p>
            <p className="text-white/60 text-xs mt-1">Avaliação Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
