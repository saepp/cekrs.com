import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = ({
  classAll,
  classDivOne,
  classTextOne,
  classSelectOne,
  classDivTwo,
  classTextTwo,
  classSelectTwo,
  classDivRadioOne,
  classTextRadio,
  classDivRadioTwo,
  classBoxOne,
  classCheckmarkOne,
  classLabelOne,
  classButton,
}) => {
  const [prov, setProv] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState(1);
  const [cities, setCities] = useState([]);
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-provinces`,
    fetcher
  );

  const searchCitiesByProvince = async (provinceId) => {
    setLoad(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get-cities?provinceid=${provinceId}`
    );
    const resJson = await res.json();
    setLoad(false);
    setCities(resJson.cities);
  };

  useEffect(() => {
    searchCitiesByProvince(prov);
  }, [prov]);

  return (
    <div className={classAll}>
      <div className={classDivOne}>
        <h3 className={classTextOne}>Pilih Provinsi</h3>
        <select
          className={classSelectOne}
          value={prov}
          disabled={!data}
          onChange={(e) => setProv(e.target.value)}
        >
          <option value="" disabled selected>
            Pilih Provinsi ...
          </option>
          {data?.provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>
      </div>
      <div className={classDivTwo}>
        <h3 className={classTextTwo}>Pilih Kabupaten / Kota</h3>
        <select
          className={classSelectTwo}
          value={city}
          disabled={!prov.length || load}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled selected>
            {!prov.length
              ? "Silahkan Pilih Provinsi Terlebih Dahulu"
              : "Pilih Kabupaten / Kota..."}
          </option>
          {cities.map((cit) => (
            <option key={cit.id} value={cit.id}>
              {cit.name}
            </option>
          ))}
        </select>
      </div>
      <div className={classDivRadioOne}>
        <h3 className={classTextRadio}>Pilih Tempat Tidur : </h3>
        <div className={classDivRadioTwo}>
          <div className={`${classBoxOne} mr-2`}>
            <label className={`label-one ${classLabelOne}`}>
              Covid 19
              <input
                type="radio"
                className="absolute opacity-0 cursor-pointer"
                name="radio"
                value="1"
                defaultChecked={type === 1}
                onClick={(e) => setType(e.target.value)}
              />
              <span className={`checkmark ${classCheckmarkOne}`}></span>
            </label>
          </div>
          <div className={classBoxOne}>
            <label className={`label-one ${classLabelOne}`}>
              Non-Covid 19
              <input
                type="radio"
                className="absolute opacity-0 cursor-pointer"
                name="radio"
                value="2"
                defaultChecked={type === 2}
                onClick={(e) => setType(e.target.value)}
              />
              <span className={`checkmark ${classCheckmarkOne}`}></span>
            </label>
          </div>
        </div>
      </div>
      <button
        className={`${classButton} ${!prov && "cursor-not-allowed"}`}
        disabled={!prov || load}
        onClick={() =>
          router.push(`/rs?prov=${prov}&city=${city}&type=${type}`)
        }
      >
        Cari
      </button>
    </div>
  );
};

export default Search;
