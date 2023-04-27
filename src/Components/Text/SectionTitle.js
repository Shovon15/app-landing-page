import { Typography } from "@material-tailwind/react";
import React from "react";

const SectionTitle = ({ className, title }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto">
      <Typography
        className={`${className} text-3xl text-indigo-600 font-bold py-2`}
        variant="h1"
      >
        {title}
      </Typography>
    </div>
  );
};

export default SectionTitle;
