import { Button } from "@material-tailwind/react";
import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <Button className={`${className} bg-buttonColor focus:outline-none`}>
      {children}
    </Button>
  );
};

export default PrimaryButton;

// bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white py-2 px-6 rounded-full duration-300
