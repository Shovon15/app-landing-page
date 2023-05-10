import React, { useState } from "react";
import PricingCard from "../../Components/Card/PricingCard";
import "./Pricing.css";

const Pricing = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchChange = () => {
    setSwitchOn(!isSwitchOn);
  };
  //   console.log(isSwitchOn);
  //   let price = "7";
  //   if (isSwitchOn) {
  //     price = "80";
  //   }
  //   console.log(price);
  const items = [
    {
      packageName: "Lite",
      packageBgColor: "bg-blue-300",
      priceMonth: "7",
      priceYear: "00",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "Select Lite",
      feature: [
        "One person lite",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
    },
    {
      packageName: "Pro",
      packageBgColor: "bg-red-300",
      priceMonth: "19",
      priceYear: "00",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "Select Pro",
      feature: [
        "One person Pro",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
    },
    {
      packageName: "Team",
      packageBgColor: "bg-blue-300",
      priceMonth: "31",
      priceYear: "00",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonText: "Select Team",
      feature: [
        "One person team",
        "Exports to files for easy client viewing",
        "2TB of data for your account",
      ],
    },
  ];
  return (
    <div id="pricing" className="min-h-max p-5 md:p-10">
      <p className="text-4xl md:text-5xl font-bold py-2 text-start md:text-center ">
        Pick the price <span className="text-primary">that right for you</span>
      </p>
      <p className="py-2 text-lg text-start md:text-center">
        Join millions of other customer on this platform
      </p>
      {/* ------------------------------------- */}
      <div className=" flex justify-center items-center">
        <span className="mx-2 text-sm">
          {isSwitchOn ? (
            <p className="text-gray-600 font-extrabold">Monthly</p>
          ) : (
            <p className="text-black font-extrabold">Monthly</p>
          )}
        </span>
        <label className="flex items-center relative w-max cursor-pointer focus: select-none">
          <input
            onChange={handleSwitchChange}
            type="checkbox"
            className="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none  focus:ring-offset-2  focus:ring-blue-500 bg-gray-500"
          />
          <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
        </label>
        <span className="mx-2 text-sm">
          {!isSwitchOn ? (
            <p className="text-gray-600 font-bold">Yearly</p>
          ) : (
            <p className="text-black font-bold">Yearly</p>
          )}
        </span>
      </div>
      {/* ------------------------------------ */}

      <div className="flex flex-col md:flex-row gap-5 mx-5 lg:mx-48 my-5 md:my-10">
        {items.map((item, i) => (
          <PricingCard key={i} item={item} isSwitchOn={isSwitchOn} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
