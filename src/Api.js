import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./App.css";
function Api() {
  const [söz, setSöz] = useState("");
  const [yazar, setYazar] = useState("");
  const [resim, setResim] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const url = "https://sozapi.herokuapp.com/gunluk";
      try {
        const result = await axios.get(url);
        setSöz(result.data.söz);
        setYazar(result.data.yazar);
        setResim(result.data.img);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div class="flex text-lg justify-center items-center h-screen">
        <div class="max-w-2xl rounded overflow-hidden shadow-lg">
          <img
            class="w-full h-auto "
            src={resim ? resim : <AiOutlineLoading3Quarters />}
            alt={resim}
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              {yazar ? yazar : <AiOutlineLoading3Quarters />}
            </div>
            <p class="text-gray-700 text-base text-xl">
              {söz ? söz : <AiOutlineLoading3Quarters />}
            </p>
          </div>
          <div class="px-6 py-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Api;
