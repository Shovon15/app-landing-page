import React from "react";
// import FeatureCard from "../../../Components/Card/FeatureCard";
// import SectionHeading from "../../../Components/Text/SectionHeading";
// import SectionText from "../../../Components/Text/SectionText";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscFileCode } from "react-icons/vsc";
import { VscLayers } from "react-icons/vsc";
import { BsCheckCircle } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import SectionTitle from "../../Components/Text/SectionTitle";
import FeatureCard from "../../Components/Card/FeatureCard";
import SectionText from "../../Components/Text/SectionText";
import featureImg from "../../assets/section icons/features.png";
import { Typography } from "@material-tailwind/react";

const Features = () => {
  const items = [
    {
      icon: <VscWorkspaceTrusted />,
      color: "bg-green-200",
      title: "Fully Secured",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscLayers />,
      color: "bg-indigo-200",
      title: "Well Organized",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscFileCode />,
      color: "bg-teal-200",
      title: "Clean coding",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <MdOutlineSpeed />,
      color: "bg-cyan-200",
      title: "Hi speedy app",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscWorkspaceTrusted />,
      color: "bg-blue-200",
      title: "Invoicing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscLayers />,
      color: "bg-purple-200",
      title: "Expenses",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <VscFileCode />,
      color: "bg-red-200",
      title: "Inventory",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      icon: <MdOutlineSpeed />,
      color: "bg-orange-200",
      title: "Reports",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  return (
    <div id="feature" className="min-h-max px-5 md:px-12 py-5">
      <p className=" text-primary py-2 bg- text-3xl text-start md:text-center md:text-5xl font-bold">
        Features that helps you run your business
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6  my-5">
        {items.map((item, i) => (
          <FeatureCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
