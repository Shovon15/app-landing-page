import React from "react";
import "./BannerCard.css";

const BannerCard = () => {
  const items = [
    {
      title: "Getting things done easily",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy text of the printing and typesetting industry ",
    },
    {
      title: "Easy to use",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy text of the printing and typesetting industry ",
    },
    {
      title: "25+ Integration",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy text of the printing and typesetting industry ",
    },
    {
      title: "24/7 Live support",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy text of the printing and typesetting industry ",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 md:px-12 mb-10 ">
      {items.map((item, i) => (
        <div
          key={i}
          className="parent transform transition duration-300 hover:scale-110 border border-gray-300
           hover:border-primary p-5 rounded-xl cursor-pointer text-start"
        >
          <p className="child font-bold text-2xl md:text-4xl  pb-5 pt-2">
            {item.title}
          </p>
          <p className="text-slate-800 ">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
