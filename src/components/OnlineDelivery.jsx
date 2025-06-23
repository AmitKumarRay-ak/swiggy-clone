import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function OnlineDelivery() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto p-2">
      <div className="flex items-center justify-between">
        <div className="text-[25px] font-bold">
          Restorent online delivery in Bhojpur
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card {...d} />;
        })}
      </div>
    </div>
  );
}
