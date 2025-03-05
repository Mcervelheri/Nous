import React from "react";

const Professional = ({ img, name, crp, text1, text2 }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-full w-full">
      <div>
        <img
          src={img}
          alt={name}
          className="w-full img_meninas object-cover object-top rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold my-4 text-[#5e4031]">{name}</h3>
      <p className="mb-4">
        ({crp})
        <br />
        <br />
        {text1}
        <br />
        <br />
        {text2}
      </p>
      <a href="#contato" className="text-[#5e4031] hover:underline">
        Agende sua sessão
      </a>
    </div>
  );
};

export default Professional;
