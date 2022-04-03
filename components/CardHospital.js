import { useRouter } from "next/router";
import React from "react";
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CardHospital = ({ hosp, type }) => {
  const {
    id,
    name,
    address,
    phone,
    queue,
    info,
    available_beds: beds,
    bed_availability: bed,
  } = hosp;
  const router = useRouter();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-hospital-map?hospitalid=${id}`,
    fetcher
  );

  return (
    <div className="max-w-screen-md max-h-fit border-2 rounded-md drop-shadow-lg p-4 mb-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">RS Gatot Subroto</h3>
          <p className="font-semibold mt-2">Jl. Bandung</p>
          <p className="text-sm font-semibold mt-2">
            Diupdate kurang dari 1 menit lalu
          </p>
        </div>
        <div className="flex flex-col text-center justify-center">
          <div className="py-2 px-3 ml-2 shadow-inner">
            <p className="text-lg font-bold">Tersedia : 3</p>
            <p className="font-bold">Tanpa Antrean</p>
          </div>
        </div>
      </div>
      <div className="flex mt-2 pt-2 justify-between">
        <button className="flex justify-center items-center h-10 bg-[#262FD8] text-white font-semibold px-4 rounded-md">
          <FaPhone className="mr-2" />
          0231678120
        </button>
        <div className="flex">
          <button className="flex h-10 justify-center items-center bg-white border border-[#262FD8] rounded-md px-4 text-[#262FD8] font-semibold">
            <FaMapMarkerAlt className="mr-2" />
            Lokasi
          </button>
          <button className="flex h-10 justify-center items-center bg-white border border-[#262FD8] rounded-md px-4 text-[#262FD8] font-semibold ml-2">
            Detail
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHospital;
