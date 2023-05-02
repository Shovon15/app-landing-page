import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
import logo from "../../assets/logos/app-store.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import "./Nav.css";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  console.log(openNav);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row items-start lg:items-center">
      <Link
        to="home"
        spy={true}
        smooth={true}
        activeClass="active"
        offset={-70}
        duration={500}
        className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
      >
        Home
      </Link>

      <Link
        to="feature"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-50}
        duration={500}
        className="text-gray-800 hover:text-blue-500 font-semibold  duration-500 cursor-pointer p-1"
      >
        Feature
      </Link>

      <Link
        to="how_its_work"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-50}
        duration={500}
        className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
      >
        How it's work
      </Link>

      <Link
        to="why_this_app"
        spy={true}
        smooth={true}
        activeClass="active"
        offset={-50}
        duration={500}
        className="text-gray-800  hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
      >
        Why this app
      </Link>

      <Link
        to="review"
        spy={true}
        smooth={true}
        activeClass="active"
        offset={-50}
        duration={500}
        className="text-gray-800  hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
      >
        Review's
      </Link>

      <Link
        to="faq"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-50}
        duration={500}
        className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
      >
        FAQ
      </Link>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img className="w-10" src={logo} alt="..." />
          <div className="flex items-center gap-2">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <PrimaryButton className="rounded-full text-sm hidden lg:inline-block">
              Get Started
            </PrimaryButton>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="flex flex-col" open={openNav}>
          {navList}
          <PrimaryButton variant="gradient" fullWidth className="rounded-full ">
            Get Started
          </PrimaryButton>
          {/* <Button variant="gradient" size="sm" className="mb-2">
            <span>Buy Now</span>
          </Button> */}
        </MobileNav>
      </Navbar>
    </>
  );
};
export default Nav;
