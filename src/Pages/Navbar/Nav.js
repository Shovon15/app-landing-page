import React, { useContext, useEffect, useRef } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
import logo from "../../assets/logos/logo.png";
import "./Nav.css";
import { ScrollContext } from "../../Context/ScrollPosition";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { scrollPosition } = useContext(ScrollContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  // ---------for click outside nav close--------------------
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenNav(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row items-start lg:items-center">
      <Link
        to="home"
        spy={true}
        smooth={true}
        activeClass="active"
        offset={-70}
        duration={500}
        className="text-gray-800 hover:text-primary font-semibold duration-500 cursor-pointer p-1"
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
        className="text-gray-800 hover:text-primary font-semibold  duration-500 cursor-pointer p-1"
      >
        Feature
      </Link>
      {/* <Link
        to="review"
        spy={true}
        smooth={true}
        activeClass="active"
        offset={-50}
        duration={500}
        className="text-gray-800  hover:text-primary font-semibold duration-500 cursor-pointer p-1"
      >
        Review's
      </Link>

      <Link
        to="pricing"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-50}
        duration={500}
        className="text-gray-800 hover:text-primary font-semibold duration-500 cursor-pointer p-1"
      >
        Pricing
      </Link> */}

      <Link
        to="faq"
        spy={true}
        activeClass="active"
        smooth={true}
        offset={-50}
        duration={500}
        className="text-gray-800 hover:text-primary font-semibold duration-500 cursor-pointer p-1"
      >
        FAQ
      </Link>
    </ul>
  );

  return (
    <>
      <Navbar
        className={`sticky inset-0 z-10 h-max max-w-full transition-shadow bg-white border-none rounded-none py-2 px-4 lg:px-8 lg:py-3  ${
          scrollPosition > 0
            ? "shadow-[0_25px_30px_-15px_rgba(0,0,0,0.2)]"
            : "shadow-none"
        }`}
        ref={menuRef}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <img className="w-44" src={logo} alt="..." />
          <div className="flex items-center gap-2">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link
              to="register"
              spy={true}
              smooth={true}
              activeClass="active"
              offset={-60}
              duration={500}
            >
              <Button className="hidden bg-buttonColor  lg:inline-block">
                Free Trial
              </Button>
            </Link>

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
          <Link
            to="register"
            spy={true}
            smooth={true}
            activeClass="active"
            offset={-60}
            duration={500}
          >
            <Button className="rounded-md bg-primary mr-auto px-10">
              Free Trial
            </Button>
          </Link>
        </MobileNav>
      </Navbar>
    </>
  );
};
export default Nav;
