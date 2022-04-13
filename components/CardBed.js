import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardBed = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
      />
      <div className="bg-blue-500 h-12 w-full pl-5 flex items-center rounded-md">
        <p className="text-lg font-bold text-white">IGD Khusus Covid</p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <IoIosArrowDown className="h-6 w-6" />
      </div>

      {/* Content */}
      <div className="bg-gray-500 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 rounded-bl-md rounded-br-md mb-10">
        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            explicabo id culpa? Alias ipsum hic nemo placeat? Est nulla mollitia
            vel aspernatur pariatur deserunt suscipit ad numquam sint? Vitae,
            aliquid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBed;
