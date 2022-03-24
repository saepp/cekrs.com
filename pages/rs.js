import { useRouter } from "next/router";
import useSWR from "swr";
import React from "react";

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
      content = hospitals.map((hosp) => {});
    }
  };

  return <div></div>;
};

export default RumahSakit;
