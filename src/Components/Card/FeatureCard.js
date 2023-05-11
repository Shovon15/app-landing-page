import React from "react";
import "../../Pages/Feature/Feature.css";

const FeatureCard = ({ item }) => {
  const { text, icon, title, color } = item;
  // console.log(color);
  return (
    <div
      className="zoom p-5 w-full text-start border hover:shadow-xl hover:bg-white cursor-pointer rounded-lg 
    hover:text-slate-700 shadow-none"
    >
      <div
        className={` w-20 h-20 p-4 rounded-full ${color} text-5xl text-white`}
      >
        {icon}
      </div>
      <p className="font-semibold text-2xl md:text-3xl text-primary py-2">
        {title}
      </p>
      <p className="text-slate-800">{text}</p>
    </div>
  );
};

export default FeatureCard;

// bg-${color}-600
