import React from "react";
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
  // console.log(ratingStar);
  return (
    <>
      <div className="card  w-[520px] h-[350px] bg-white  rounded-lg shadow-lg p-5 hover:shadow-xl">
        {/* <div className="px-5 w-full text-center border hover:border-white hover:shadow-xl hover:bg-white cursor-pointer rounded-lg hover:text-slate-700"> */}
        <div className="flex justify-between items-center">
          <div>
            <img
              className="rounded-full w-20 h-20 ring ring-blue-500  hover:ring-4 cursor-pointer "
              src={avatar}
              alt="..."
            />
            <p className="font-semibold text-xl pt-2">{name}</p>
            <p className="text-gray-400 pb-2">{desig}</p>
          </div>
          <div>
            <p className="flex text-yellow-800 text-xl ">{ratingStar}</p>
          </div>
        </div>

        <FaQuoteLeft className="text-gray-500" />
        <p className="text-slate-800  indent-8 break-words">{text}</p>
        <FaQuoteRight className="ml-auto mr-5 text-gray-500" />
      </div>
    </>
  );
};

export default CarouselCard;
