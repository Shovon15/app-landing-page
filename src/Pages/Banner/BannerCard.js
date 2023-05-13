import React from "react";
import "./BannerCard.css";

const BannerCard = () => {
  const items = [
    {
      title: "Getting things done easily",
      text: "Our accounting software simplifies your financial management with powerful features and an easy-to-use interface.",
    },
    {
      title: "Easy to use",
      text: "Get organized,save time, and make informed decisions for your business.",
    },
    {
      title: "25+ Integration",
      text: "Get organized, save time, and make informed decisions for your business.",
    },
    {
      title: "24/7 Live support",
      text: "Get organized, save time, and make informed decisions for your business.",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-6 px-6 md:px-12 mb-5 ">
      {items.map((item, i) => (
        <div
          className="parent zoom p-5 w-full text-start border hover:border-primary hover:shadow-xl  cursor-pointer rounded-lg 
       shadow-none"
        >
          <p className="child font-bold text-2xl md:text-4xl  pb-5 pt-2">
            {item.title}
          </p>
          <p className="text-slate-800">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
