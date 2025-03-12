/* eslint-disable react/prop-types */
import EssenceList from "./EssenceList";

const Mission = ({ type }) => {
  return (
    <div id="missao" className="py-6 relative bg-[#f3f1ed] z-20">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
          {type === "Essence" ? "Nossa Essência" : ""}
        </h2>
        <div
          className={`grid sm:grid-cols-3 max-sm:px-6 lg:mx-20 gap-8 ${
            type === "Informations" ? "max-sm:gap-16" : ""
          }`}
        >
          <EssenceList type={type} />
        </div>
      </div>
    </div>
  );
};

export default Mission;
