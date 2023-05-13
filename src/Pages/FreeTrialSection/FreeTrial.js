import { Button } from "@material-tailwind/react";
import React from "react";

const FreeTrial = () => {
  return (
    <div className="min-h-max  mx-none md:mx-16 md:m-5">
      <div className="bg-primary text-white flex flex-col gap-5 justify-center items-center px-5 lg:px-64  py-10">
        <p className="text-4xl font-bold md:text-5xl">
          Get your 30 days free trial
        </p>
        <p className="text-md">
          Try our accounting software today and experience the benefits and
          streamlined financial management for your business. Sign up for a free
          trial or contact us for more information.
        </p>
        <Button
          variant="outlined"
          className="border-white text-white focus:ring-0  mt-4"
        >
          Register for free
        </Button>
      </div>
    </div>
  );
};

export default FreeTrial;
