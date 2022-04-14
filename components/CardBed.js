import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CardBed = ({ detail }) => {
  const { stats, time } = detail;
  const { title, bed_available: bed, bed_empty: empty, queue } = stats;

  return (
    <div className="relative w-full overflow-hidden h-fit mb-2 shadow-lg">
      <input
        type="checkbox"
        className="peer absolute top-0 inset-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
      />
      <div className="bg-white h-20 w-full pl-5 flex flex-col rounded-md justify-center drop-shadow-md shadow-black">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-lg font-bold">Diupdate pada {time}</p>
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-7 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
        <IoIosArrowDown className="h-6 w-6" />
      </div>

      {/* Content */}
      <div className="bg-[#EDF2F7] overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 drop-shadow-md shadow-black">
        <div className="flex justify-around p-4">
          <div className="flex flex-col bg-green-600 rounded-md p-4 items-center">
            <p className="font-semibold">Tempat Tidur</p>
            <p className="font-bold text-3xl">{bed}</p>
          </div>
          <div className="flex flex-col bg-blue-600 rounded-md p-4 items-center">
            <p className="font-semibold">Kosong</p>
            <p className="font-bold text-3xl">{empty}</p>
          </div>
          <div className="flex flex-col bg-orange-600 rounded-md p-4 items-center">
            <p className="font-semibold">Antrean</p>
            <p className="font-bold text-3xl">{queue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBed;
