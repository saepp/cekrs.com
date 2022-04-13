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
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="font-semibold mt-2">{address}</p>
          {+type === 1 && <p className="text-sm font-semibold mt-2">{info}</p>}
        </div>
        {+type === 1 && (
          <div className="flex flex-col text-center justify-center items-center">
            <div
              className={`flex flex-col justify-center items-center h-full py-2 px-3 ml-2 shadow-inner rounded-md ${
                bed === 0 && "bg-red-600"
              }`}
            >
              {bed === 0 ? (
                <p className="text-lg font-bold">Penuh!</p>
              ) : (
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Tersedia : {bed}</p>
                  <p className="font-bold">{queue || "Tanpa"} Antrean</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {beds && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
          {beds.length !== 0 ? (
            beds.map((be, index) => (
              <div
                key={String(index)}
                className={`flex flex-col p-3 items-center bg-gray-100 rounded-md shadow-inner ${
                  be.available <= 0 && "border-2 border-red-600"
                }`}
              >
                <p
                  className={`text-2xl font-bold ${
                    be.available <= 0 && "text-red-600"
                  }`}
                >
                  {be.available}
                </p>
                <p className="font-semibold">{be.bed_class}</p>
                <p className="font-semibold text-sm">{be.room_name}</p>
                <hr className="w-full border-b border-black/20 my-2"></hr>
                <p className="text-xs">{be.info}</p>
              </div>
            ))
          ) : (
            <div className="p-3 font-semibold align-center bg-gray-100 rounded-md shadow-inner">
              Data tidak ditemukan
            </div>
          )}
        </div>
      )}
      <div className="flex mt-2 pt-2 justify-between">
        <button
          href={`tel:${phone}`}
          disabled={!phone}
          className="flex justify-center items-center h-10 bg-[#262FD8] text-white font-semibold px-4 rounded-md"
        >
          <FaPhone className="mr-2" />
          {phone || "Tidak tersedia"}
        </button>
        <div className="flex">
          <button
            href={data?.data?.gmaps}
            rel="noreferrer"
            target="_blank"
            className="flex h-10 justify-center items-center bg-white border border-[#262FD8] rounded-md px-4 text-[#262FD8] font-semibold"
          >
            <FaMapMarkerAlt className="mr-2" />
            Lokasi
          </button>
          <button
            onClick={() => router.push("/rs-detail?id=${id}&type=${type}")}
            className="flex h-10 justify-center items-center bg-white border border-[#262FD8] rounded-md px-4 text-[#262FD8] font-semibold ml-2 cursor-pointer"
          >
            Detail
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHospital;
