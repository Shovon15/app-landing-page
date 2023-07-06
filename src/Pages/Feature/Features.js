import React from "react";
import { TbBinaryTree2 } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { FaMoneyCheckAlt } from "react-icons/fa";
import FeatureCard from "../../Components/Card/FeatureCard";

const Features = () => {
  const items = [
    {
      icon: <BsBoxes />,
      color: "bg-primary",
      title: "Real Time Inventory",
      text1: "Real time inventory syncing for online and instore sales",
      text2: "Faster brand new, preowned product management",
    },
    {
      icon: <TbBinaryTree2 />,
      color: "bg-primary",
      title: "Multibranch at one place",
      text1: "Connect all your store and manage from one place",
      text2: "",
    },
    {
      icon: <TbReportMoney />,
      color: "bg-primary",
      title: "Accurate Accounting and Dynamic Reporting",
      text1: "Monitor your financials,track your payments",
      text2: "Grow your business with data driven insights",
    },
    {
      icon: <FaMoneyCheckAlt />,
      color: "bg-primary",
      title: "Revenue based quick loan",
      text1: "Get access to finance in no timer based on your revenue",
      text2: "",
    },
  ];
  return (
    <div id="feature" className="min-h-max px-5 md:px-12 py-5 md:py-10">
      <p className=" text-primary py-2  text-4xl text-start md:text-center md:text-5xl font-bold">
        Features that helps to grow your business
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  my-5">
        {items.map((item, i) => (
          <FeatureCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Features;
