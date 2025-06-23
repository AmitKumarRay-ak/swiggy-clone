import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const nextSlide = () => {
    if(categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if(slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-2">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 my-2 flex justify-center items-center cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 my-2 flex justify-center items-center cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="w-[150px] shrink-0  duration-500"
              style={{ transform: `translatex(-${slide * 100}%)` }}
            >
              <img src={"http://localhost:5000/images/" + cat.image}></img>
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px] border-[#4646468a]" />
    </div>
  );
}
