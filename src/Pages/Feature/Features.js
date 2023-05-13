import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import FeatureCard from "../../Components/Card/FeatureCard";

const Features = () => {
  const items = [
    {
      icon: <FaFileInvoice />,
      color: "bg-primary",
      title: "Invoicing",
      text: "Reduce unpain invoices,keep tabs on your income,and get paid faster-for the low price for FREE",
    },
    {
      icon: <IoWalletOutline />,
      color: "bg-primary",
      title: "Expenses",
      text: "Get set for tax time with all your expenses organised in one place.",
    },
    {
      icon: <BsBoxes />,
      color: "bg-primary",
      title: "Inventory",
      text: "Stay on top of your orders and quantities while managing your inventory in real-time",
    },
    {
      icon: <FaRegChartBar />,
      color: "bg-primary",
      title: "Reports",
      text: "Stay on top of your orders and quantities while managing your inventory in real-time",
    },
  ];
  return (
    <div id="feature" className="min-h-max px-5 md:px-12 py-5 md:py-10">
      <p className=" text-primary py-2  text-4xl text-start md:text-center md:text-5xl font-bold">
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
