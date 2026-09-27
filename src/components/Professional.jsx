/* eslint-disable react/prop-types */
const Professional = ({ img, name, crp, text1, text2, specialty }) => {
  return (
    <div className="bg-white shadow-[#5e4031] shadow-lg rounded-lg p-6 h-full w-full transition-transform duration-300 lg:hover:scale-105 flex flex-col">
      <div>
        <img
          src={img}
          alt={name}
          className="w-full img_meninas object-cover object-top rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold my-3 text-[#5e4031]" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
      {specialty && (
        <span className="inline-block bg-[#f3f1ed] text-[#5e4031] text-xs font-medium px-3 py-1 rounded-full mb-3 border border-[#bb947e]">
          {specialty}
        </span>
      )}
      <p className="text-sm text-gray-500 mb-2">({crp})</p>
      <p className="text-sm leading-relaxed text-gray-700 mb-4 flex-grow">
        {text1}
        <br /><br />
        {text2}
      </p>
      <a
        href="https://wa.me/554498379833"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-full bg-[#5e4031] text-white py-3 rounded-lg font-medium text-center
                   hover:bg-[#4a3328] transition-all duration-300 hover:shadow-lg
                   flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.591-.838-6.311-2.236l-.44-.366-3.065 1.027 1.027-3.065-.366-.44A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
        Agendar com {name.split(" ")[0]}
      </a>
    </div>
  );
};

export default Professional;

