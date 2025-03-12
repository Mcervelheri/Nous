/* eslint-disable react/prop-types */
const Professional = ({ img, name, crp, text1, text2 }) => {
  return (
    <div className="bg-white shadow-[#5e4031] shadow-lg rounded-lg p-6 h-full w-full transition-transform duration-300 lg:hover:scale-105">
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
      <a
        href="https://w.app/nous"
        target="_blank"
        className="text-[#5e4031] hover:underline"
      >
        Agende sua sessão
      </a>
    </div>
  );
};

export default Professional;
