import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logos/logo.png";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { ImFacebook2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-start gap-y-6 gap-x-12 text-start md:justify-between">
        <div>
          <img src={logo} alt="logo-ct" className="w-44" />
          <p className="text-wrap pt-5 pl-0 text-start">
            Try our Supershop today and experience the benifits of streamlined
            financial management for your business.Sign up for a free trial or
            contact us for more information.
          </p>

          <div className="flex gap-5 text-2xl py-5  text-gray-800">
            <a href="https://www.facebook.com/" className="cursor-pointer ">
              <ImFacebook2 />
            </a>
            <a href="https://www.youtube.com/" className="cursor-pointer">
              <ImYoutube />
            </a>
            <a href="https://www.linkedin.com/" className="cursor-pointer">
              <ImLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-start text-2xl font-semibold">Contact Info</p>
          <div className="flex flex-col gap-2">
            <p className="text-md mb-2">
              Delta Dahlia Tower (Level 06), 36 Kemal Ataturl Avenue, Banani,
              Dhaka-1213
            </p>
            <span className="flex  gap-2">
              <BsTelephone />
              <p>+88 018 800 88553</p>
            </span>
            <span className="flex gap-2">
              <CiMail className="text-lg" />
              <p>info@swap.com.bd</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-start text-2xl font-semibold">
            Feature & Benefits
          </p>
          <div className="flex flex-col  gap-2">
            <li>Features</li>
            <li>Plans & Pricing</li>
          </div>
        </div>
      </div>
      <hr className="my-4 border-blue-gray-200" />
      <Typography color="blue-gray" className="text-center font-normal">
        Copyright &copy; 2023 Supershop All right reserved
      </Typography>
    </footer>
  );
}
