import React from "react";
import { productList } from "../assets/Product";

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productList.map((item, index) => (
        <div
          key={index}
          className="border-[2px] border-gray-600 rounded-lg
           hover:scale-110 transition-all duration-300 
           ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <img src={item.image} alt={item.name} className="w-full z-[1]" />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 z-0 opacity-0 hover:opacity-50 rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
