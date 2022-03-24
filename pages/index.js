import Head from "next/head";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#362D3D] text-[#362D3D] dark:text-white overflow-hidden md:space-y-6">
      <Head>
        <title>cekrs.com</title>
      </Head>

      <div className="flex flex-col justify-center h-screen items-center">
        <h1 className="text-5xl font-bold text-center pb-6">
          Cek Ketersediaan Tempat Tidur <br /> Rumah Sakit
        </h1>
        <div className="w-[744px] border-t border-black/20 pt-6"></div>
        <Search
          classAll=""
          classDivOne="mb-6"
          classTextOne="font-bold text-xl mb-1"
          classSelectOne="border bg-transparent w-[744px] h-10 rounded border-black/20 font-bold text-md pl-4"
          classDivTwo="mb-6"
          classTextTwo="font-bold text-xl mb-1"
          classSelectTwo="border bg-transparent w-[744px] h-10 rounded border-black/20 font-bold text-md pl-4"
          classButton="w-[744px] h-10 bg-[#262FD8] text-white font-bold rounded cursor-pointer"
        />
      </div>
    </div>
  );
}
