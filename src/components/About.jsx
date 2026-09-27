const Sobre = () => {
  return (
    <div id="sobre" className="relative bg-[#f3f1ed] py-16 z-20">
      <div className="container mx-auto text-center px-4">
        <h2
          className="text-3xl font-bold mb-3 text-[#5e4031]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sobre a Clínica NOUS
        </h2>
        <div className="w-16 h-0.5 bg-[#bb947e] mx-auto mb-8"></div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos uma clínica de psicologia em <strong>Maringá-PR</strong> dedicada a oferecer 
            cuidado psicológico de excelência. Nossa equipe de psicólogas especializadas em{" "}
            <strong>Terapia Cognitivo-Comportamental (TCC)</strong> está pronta para te acolher 
            e te ajudar a construir uma vida mais equilibrada.
          </p>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e8e0d8]">
            <h3 className="text-lg font-semibold text-[#5e4031] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Por que &ldquo;Nous&rdquo;?
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              O nome Nous vem do grego antigo e significa <em>&ldquo;mente&rdquo;</em>,{" "}
              <em>&ldquo;inteligência&rdquo;</em> ou <em>&ldquo;razão&rdquo;</em>. Na filosofia grega, 
              Nous é a razão divina que governa o universo, trazendo ordem e harmonia ao cosmos. 
              Para nós, esse conceito simboliza a importância do autoconhecimento e da inteligência 
              emocional no cuidado com a saúde mental.
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Em nossa clínica, Nous representa nossa missão de cuidar da mente e promover 
            o equilíbrio através da razão e do entendimento profundo dos sentimentos e pensamentos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
