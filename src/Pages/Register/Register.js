import { Button } from "@material-tailwind/react";
import React from "react";
import img from "../../assets/screen/register.jpg";
import logoimg from "../../assets/logos/company-logo.png";

const Register = () => {
  const logos = [
    {
      logoimg,
    },
    {
      logoimg,
    },
    {
      logoimg,
    },
    {
      logoimg,
    },
    {
      logoimg,
    },
    {
      logoimg,
    },
  ];
  return (
    <div className=" min-h-max">
      <div className="bg-primary  md:h-96 text-white flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-5/12 mx-10">
          <img
            src={img}
            alt="..."
            className="w-72 mx-auto md:w-80 md:ml-auto m-5 md:m-0"
            style={{ borderRadius: "30% 0 30% 0" }}
          />
        </div>
        <div className="w-full md:w-7/12 p-5 md:px-0 mx-10 flex flex-col gap-4 text-start">
          <p className="text-4xl font-bold md:text-5xl ">
            Ready to run your business better
          </p>
          <p className="text-xl md:text-2xl ">
            We offer excelent customer support and training resourses to help
            you get the most out of our software.
          </p>
          <Button
            variant="outlined"
            className="border-white text-white focus:ring-0 mr-auto mt-4"
          >
            Register for free
          </Button>
        </div>
      </div>
      <div className="p-5 md:p-10">
        <p className="text-primary text-4xl md:text-5xl font-bold text-start md:text-center py-2">
          Trusted by more than 100 company
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 py-5 md:py-10">
          {logos.map((logo, i) => (
            <img key={i} src={logo.logoimg} alt="..." />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
