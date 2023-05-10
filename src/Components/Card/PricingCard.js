import { Button } from "@material-tailwind/react";
import React from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const PricingCard = ({ item, isSwitchOn }) => {
  console.log(isSwitchOn);
  const {
    packageName,
    packageBgColor,
    priceMonth,
    priceYear,
    title,
    feature,
    buttonText,
  } = item;
  return (
    <div
      className="zoom p-5 w-full text-start border hover:shadow-xl hover:bg-white cursor-pointer rounded-lg 
      hover:text-slate-700 shadow-none flex flex-col gap-3"
    >
      <div
        className={`w-16 h-6 rounded-full ${packageBgColor} text-md text-white`}
      >
        <p className="flex justify-center">{packageName}</p>
      </div>
      {isSwitchOn === false ? (
        <p className="flex items-end">
          <span className="text-3xl font-bold">${priceMonth}</span>
          <span className="text-gray-600"> /month</span>
        </p>
      ) : (
        <p className="flex items-end">
          <span className="text-3xl font-bold">${priceYear}</span>
          <span className="text-gray-600"> /year</span>
        </p>
      )}
      <p className=" text-sm">{title}</p>
      <Button fullWidth>{buttonText}</Button>
      <hr className="my-2 border-blue-gray-200" />
      <div>
        {feature.map((featureItem, i) => (
          <div key={i} className="flex gap-3 items-center">
            <IoCheckmarkDoneCircleOutline className="text-2xl text-gray-600" />
            <p className="text-sm">{featureItem}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
