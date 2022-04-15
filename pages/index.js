import Head from "next/head";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#362D3D] text-[#362D3D] dark:text-white md:space-y-6">
      <Head>
        <title>cekrs.com</title>
      </Head>

      <div className="flex flex-col justify-center max-w-screen-md h-screen items-center mx-auto">
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
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}
