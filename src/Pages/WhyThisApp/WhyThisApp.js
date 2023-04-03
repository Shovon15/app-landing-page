import React from "react";
import SectionTitle from "../../Components/Text/SectionTitle";
import WhyUseCard from "../../Components/Card/WhyUseCard";
import { BsBug } from "react-icons/bs";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsFileEarmarkCode } from "react-icons/bs";
import softwareImg from "../../assets/section icons/softawre.png";

// import WhyUseCard from "../../../Components/Card/WhyUseCard";
// import SectionHeading from "../../../Components/Text/SectionHeading";

const WhyThisApp = () => {
  const items = [
    {
      icon: <BsBug />,
      title: "Branding",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: <MdOutlineScreenshotMonitor />,
      title: "Web Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: <IoColorPaletteOutline />,
      title: "UI/UX Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: <BsFileEarmarkCode />,
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <div
      id="why_this_app"
      className="px-5 md:px-12 py-5 md:py-10  min-h-screen bg-gray-100"
    >
      <img src={softwareImg} alt="..." className="w-20 m-1 mx-auto" />
      <SectionTitle
        title="Why you will choose
                our software?"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        {items.map((item, i) => (
          <WhyUseCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyThisApp;
