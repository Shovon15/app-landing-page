import React from "react";
import "./CarouselCard.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const CarouselCard = ({ item }) => {
  const { avatar, text, name, review, desig } = item;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span>
        {review >= index + 1 ? (
          <AiFillStar />
        ) : review >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="card border  bg-white rounded-lg shadow-none p-2 md:p-5 md:m-2 hover:shadow-md">
      <div className="flex justify-start gap-5 items-center">
        <img
          className="rounded-full w-16 h-16 ring-1 ring-primary  hover:ring-2 cursor-pointer "
          src={avatar}
          alt="..."
        />
        <div className="text-start">
          <p className="font-semibold text-xl">{name}</p>
          <p className="text-gray-400 ">{desig}</p>
          <p className="flex text-yellow-800 text-xl ">{ratingStar}</p>
        </div>
      </div>
      <div className="p-5">
        <FaQuoteLeft className="text-gray-500" />
        <p className="text-slate-800  indent-8 break-words">{text}</p>
        <FaQuoteRight className="ml-auto mr-5 text-gray-500" />
      </div>
    </div>
  );
};

export default CarouselCard;
