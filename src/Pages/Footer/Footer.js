import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logos/app-store.png";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import appStore from "../../assets/footer/app1.png";
import googlePlay from "../../assets/footer/gp1.png";

export default function Footer() {
  return (
    <footer className=" bg-gray-200 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        <div>
          <img src={logo} alt="logo-ct" className="w-20" />
          <p className="text-wrap w-80 p-5 pl-0 text-start">
            Lorem Ipsum is simply dummy text of the printing and type.
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              //   href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500  cursor-pointer"
            >
              Contribute
            </Typography>
          </li>
        </ul>
        <div>
          <p className="text-start font-semibold">Contact:</p>
          <div className="grid grid-cols-2">
            <span className="flex gap-2">
              <BsTelephone />
              <p>+0098278278247</p>
            </span>
            <span className="flex gap-2">
              <GoLocation />
              <p>
                380 St Kilda Road,
                <br /> Melbourne, Australia
              </p>
            </span>
            <span>
              <img src={appStore} alt="..." className="cursor-pointer" />
            </span>
            <span>
              <img src={googlePlay} alt="..." className="cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-200" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Abcd App
      </Typography>
    </footer>
  );
}
