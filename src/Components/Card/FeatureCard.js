import React from "react";
import "../../Pages/Feature/Feature.css";

const FeatureCard = ({ item }) => {
  const { text, icon, title } = item;
  return (
    <div className="zoom px-5 w-full text-center border hover:border-gray-400 hover:shadow-xl hover:bg-white cursor-pointer rounded-lg hover:text-slate-700">
      <div className="flex justify-center items-center text-5xl hover:text-yellow-500 py-3 ">
        {icon}
      </div>
      <p className="font-semibold text-xl pb-5 pt-2">{title}</p>
      <p className="text-slate-800 pb-5 ">{text}</p>
    </div>
  );
};

export default FeatureCard;
