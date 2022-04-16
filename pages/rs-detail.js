import { useRouter } from "next/router";
import React from "react";
import { FaArrowLeft, FaPhone } from "react-icons/fa";
import useSWR from "swr";

import CardBed from "../components/CardBed";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

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
      <div className="flex flex-col max-w-screen-md mx-auto px-2 pt-6 pb-2">
        <h1 className="font-bold text-5xl text-center">Daftar Rumah Sakit</h1>
        <Search
          classAll="flex flex-col md:flex-row justify-center w-full mt-5"
          classDivOne="w-full md:w-44 md:mr-1"
          classTextOne="font-bold"
          classSelectOne="h-10 w-full md:w-44 font-bold rounded-md"
          classDivTwo="w-full md:w-44 md:mr-1"
          classTextTwo="font-bold"
          classSelectTwo="h-10 w-full md:w-44 font-bold rounded-md"
          classDivRadioOne="w-full md:w-72 md:mr-1"
          classTextRadio="font-bold"
          classDivRadioTwo="flex"
          classBoxOne="inline-flex w-full md:w-36 h-10 border items-center justify-center rounded-md"
          classCheckmarkOne="top-0.5"
          classLabelOne="font-bold pl-7 pr-1"
          classDivButton="flex items-end justify-center w-full"
          classButton="w-full h-10 border md:w-24 font-bold bg-[#262FD8] text-white rounded-md mt-2"
        />
        <hr className="w-full border-b border-black/20 my-2 w" />
        <button
          onClick={() => router.back()}
          className="flex w-full h-10 text-white bg-[#262FD8] hover:bg-[#0f1699] justify-center items-center text-center font-bold rounded-md mb-2"
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
          <div className="flex items-center justify-center mt-4">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default RumahSakit;
