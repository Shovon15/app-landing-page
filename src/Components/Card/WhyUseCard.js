import React from "react";

const WhyUseCard = ({ item }) => {
  const { text, icon, title } = item;
  return (
    <div
      className="zoom px-5 w-full text-center border border-white  hover:border-white
     hover:shadow-xl hover:bg-white cursor-pointer rounded-lg "
    >
      <div className="flex justify-center items-center text-5xl hover:text-indigo-700 py-3 ">
        {icon}
      </div>
      <p
        className="font-semibold text-xl pb-5 pt-2 transition ease-in-out delay-150
       text-indigo-500 hover:-translate-y-1 hover:scale-110  duration-300"
      >
        {title}
      </p>
      <p className="text-slate-800 pb-5">{text}</p>
    </div>
  );
};

export default WhyUseCard;
