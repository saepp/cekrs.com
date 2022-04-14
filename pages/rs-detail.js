import { useRouter } from "next/router";
import React from "react";
import { FaArrowLeft, FaPhone } from "react-icons/fa";
import useSWR from "swr";

import CardBed from "../components/CardBed";
import Search from "../components/Search";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RumahSakit = () => {
  const router = useRouter();
  const { id, type } = router.query;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-bed-detail?hospitalid=${id}&type=${type}`,
    fetcher
  );

  return (
    <div className="bg-white dark:bg-[#362D3D] text-[#362D3D] dark:text-white">
      <div className="flex flex-col max-w-screen-md mx-auto">
        <h1 className="font-bold text-5xl text-center">Daftar Rumah Sakit</h1>
        <Search
          classAll="flex flex-col md:flex-row w-full relative"
          classDivOne="mr-2"
          classTextOne="font-bold"
          classSelectOne="h-10 w-full md:max-w-[176px] font-bold"
          classDivTwo="mr-2"
          classTextTwo="font-bold"
          classSelectTwo="h-10 w-full md:max-w-[176px] font-bold"
          classDivRadioOne="mr-2"
          classTextRadio="font-bold"
          classBoxOne="inline-flex w-fit h-10 border items-center px-2"
          classCheckmarkOne="top-0.5"
          classLabelOne="font-bold"
          classButton="absolute h-10 border w-28 bottom-0 right-0 font-bold bg-[#262FD8] text-white rounded-md"
        />
        <hr className="w-full border-b border-black/20 my-2 w" />
        <button
          onClick={() => router.back()}
          className="flex w-full h-10 text-white bg-[#262FD8] justify-center items-center text-center font-bold rounded-md mb-2"
        >
          <FaArrowLeft className="mr-2" /> Kembali Ke Daftar
        </button>
        {data ? (
          <div className="w-full pt-3">
            <h1 className="text-3xl font-bold">{data.data.name}</h1>
            <p className="font-semibold mt-2">{data.data.address}</p>
            <a
              href={`tel:${data.data.phone}`}
              className={`inline-flex items-center justify-center px-2 rounded-md text-lg font-bold w-fit h-10 mt-2 ${
                data.data.phone === "hotline tidak tersedia"
                  ? "cursor-not-allowed text-[#a3a7ac]"
                  : "bg-white hover:bg-gray-300"
              }`}
            >
              <FaPhone className="mr-2" />
              {data.data.phone}
            </a>
            <div className="w-full pt-2">
              {data.data.bedDetail.map((bed, index) => (
                <CardBed key={String(index)} detail={bed} />
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default RumahSakit;
