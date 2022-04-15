import Head from "next/head";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#362D3D] text-[#362D3D] dark:text-white">
      <Head>
        <title>cekrs.com</title>
      </Head>

      <div className="flex flex-col justify-center max-w-screen-md h-screen items-center mx-auto px-2">
        <h1 className="text-5xl font-bold text-center pb-6">
          Cek Ketersediaan Tempat Tidur <br /> Rumah Sakit
        </h1>
        <div className="w-full border-t border-black/20 pt-6"></div>
        <Search
          classAll="w-full"
          classDivOne="mb-6"
          classTextOne="font-bold text-xl mb-1"
          classSelectOne="border bg-transparent w-full h-10 rounded border-black/20 font-bold text-md pl-4"
          classDivTwo="mb-6"
          classTextTwo="font-bold text-xl mb-1"
          classSelectTwo="border bg-transparent w-full h-10 rounded border-black/20 font-bold text-md pl-4"
          classDivRadioOne="flex flex-col md:flex-row mb-6"
          classTextRadio="font-bold text-lg"
          classDivRadioTwo="flex flex-col md:flex-row"
          classCheckmarkOne="top-1"
          classLabelOne="font-bold text-lg"
          classButton="w-full h-10 bg-[#262FD8] text-white font-bold rounded cursor-pointer"
        />
      </div>
    </div>
  );
}
