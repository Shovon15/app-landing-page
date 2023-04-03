import React from "react";
import "../../Pages/Feature/Feature.css";

const FeatureCard = ({ item }) => {
  const { text, icon, title, color } = item;
  console.log(color);
  return (
    <div
      className="zoom p-3 w-full text-center border
      shadow-xl 
     hover:bg-white cursor-pointer rounded-lg hover:text-slate-700"
    >
      <div
        style={{ backgroundColor: `${color}` }}
        className="mx-auto
        w-20 h-20 p-4 rounded-full text-5xl text-white"
      >
        {icon}
      </div>

      <p className="font-semibold text-xl text-primary pb-5 pt-2">{title}</p>
      <p className="text-slate-800 pb-5 ">{text}</p>
    </div>
  );
};

export default FeatureCard;

// bg-${color}-600
