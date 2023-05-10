import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logos/logo.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-start gap-y-6 gap-x-12 text-start md:justify-between">
        <div>
          <img src={logo} alt="logo-ct" className="w-44" />
          <p className="text-wrap pt-5 pl-0 text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex gap-2 text-2xl py-5 cursor-pointer">
            <AiOutlineFacebook className="" />
            <AiOutlineYoutube />
            <AiOutlineLinkedin />
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
              <MdOutlineEmail />
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
            {/* <span className="flex  gap-2">
            </span>
            <span className="flex gap-2">
            </span> */}
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
