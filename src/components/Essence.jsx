import React from "react";
import EssenceList from "./EssenceList";

const Mission = () => {
  return (
    <div id="missao" className="py-16 relative bg-[#f3f1ed] z-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#5e4031]">
          Nossa Essência
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <EssenceList />
        </div>
      </div>
    </div>
  );
};

export default Mission;
