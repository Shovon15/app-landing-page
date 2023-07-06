import React, { useContext } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { ScrollContext } from "../../Context/ScrollPosition";

const ScrollButton = () => {
  const { scrollPosition } = useContext(ScrollContext);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-5 right-5 bg-buttonColor text-white
    rounded-xl px-2.5 py-2  hover:bg-buttonColorHover
      transition ease-in-out shadow-xl ${
        scrollPosition > 100 ? "block" : "hidden"
      }`}
    >
      <BiUpArrowAlt className="text-3xl" />
    </button>
  );
};

export default ScrollButton;
