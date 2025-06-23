import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

export default function TopRestorent() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
      <div className="max-w-[1200px] mx-auto p-2">
        <div className="flex items-center justify-between">
          <div className="text-[25px] font-bold">
            Top Restaurants In Bhojpur
          </div>
          <div className="flex">
            <div
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 my-2 flex justify-center items-center cursor-pointer"
              // onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 my-2 flex justify-center items-center cursor-pointer"
              // onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="flex gap-5 overflow-hidden">
          {data.map((d, i) => {
            return <Card width="w-full md:w-[273px]" {...d} key={i} />;
          })}
          {/* <Card /> */}
        </div>

        <hr className="my-6 border-[1px] border-[#4646468a]" />
      </div>
  );
}
