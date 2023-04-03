import { Typography } from "@material-tailwind/react";
import React from "react";

const SectionText = ({ className, title }) => {
  return (
    <div className="w-full md:w-6/12 mx-auto py-2 ">
      <Typography className={`${className} py-2`} variant="paragraph">
        {title}
      </Typography>
    </div>
  );
};

export default SectionText;
