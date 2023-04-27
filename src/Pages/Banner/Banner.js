import { Button } from "@material-tailwind/react";
import React from "react";
import background from "../../assets/banner/imageedit_5_6379001357.jpg";
import banner from "../../assets/banner/slider-moc-2-1.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import TypeAnimationText from "../../Components/Text/TypeAnimationText";

const Banner = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "auto",
      }}
      className="flex flex-col lg:flex-row px-5 md:px-10 bg-slate-300  py-10 lg:py-0  min-h-max"
    >
      <div className="w-full lg:w-13/24 flex flex-col justify-center px-0">
        <TypeAnimationText />
        <p className="text-lg  text-center  text-wrap py-2">
          DealDone enables vendors to connect Multiple Carts Online Marketplaces
          & Shopping inventory. Carts to manage Multiple Online inventory.
        </p>

        <PrimaryButton className="md:mr-auto my-2 py-4 px-8 rounded-full  text-md">
          Start Free Trial
        </PrimaryButton>
      </div>
      <div className="w-full lg:w-11/24 md:p-5 mt-12">
        <img src={banner} alt="..." />
      </div>
    </div>
  );
};

export default Banner;
