import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";

import CardHospital from "../components/CardHospital";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RumahSakit = () => {
  const router = useRouter();
  const { prov, city, type } = router.query;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-hospitals?provinceid=${prov}&cityid=${city}&type=${type}`,
    fetcher
  );

  const showData = (hospitals) => {
    let content;
    if (hospitals.length !== 0) {
      content = hospitals.map((hosp) => (
        <CardHospital key={hosp.id} hosp={hosp} type={type} />
      ));
    } else {
      content = <p className="font-bold text-lg">Data tidak ditemukan</p>;
    }
    return content;
  };

  return (
    <div className="bg-white dark:bg-[#362D3D] text-[#362D3D] dark:text-white">
      <Head>
        <title>Cek RS Indonesia</title>
      </Head>
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
        <hr className="w-full border-b border-black/20 my-2" />
        <button
          onClick={() => router.push("/")}
          className="flex w-full h-10 text-white bg-[#262FD8] justify-center items-center hover:bg-[#0f1699] text-center font-bold rounded-md mb-2"
        >
          <FaArrowLeft className="mr-2" /> Kembali Ke Pencarian
        </button>
        <div>
          {data ? (
            showData(data.hospitals)
          ) : (
            <div className="flex items-center justify-center mt-4">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RumahSakit;
