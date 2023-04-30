import Carousel from "react-elastic-carousel";
import "./AppFunction.css";
import SectionTitle from "../../Components/Text/SectionTitle";
import Circle from "./Circle";
import { BsShieldCheck } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Typography } from "@material-tailwind/react";
import img1 from "../../assets/screen/ios13-iphone-xs-home-assistive-touch-menu.png";
import img2 from "../../assets/screen/ios13-iphone-xs-home-assistive-touch.png";
import img3 from "../../assets/screen/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg";
import appImg from "../../assets/section icons/how-app-work.png";
import bgImg from "../../assets/screen/mok-i-phone.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const AppFunction = () => {
  // console.log(window.innerWidth);
  // const [windowWidth, setWindowWidth] = useState(0);
  // console.log(windowWidth);

  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setWindowWidth(false)
  //   );
  // }, []);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize[0]);

  const styles = {
    popup: {
      display: "flex",
      flexDirection: "flex-row",
    },
  };
  return (
    <div id="how_its_work" className=" min-h-max py-5 md:py-5 bg-gray-200">
      <img src={appImg} alt="..." className="w-20 m-1 mx-auto" />
      <SectionTitle title="How App Works" />

      <div className="flex  w-full">
        {/* <img src={bgImg} alt="..." className="w-80 absolute left-[235px]" /> */}
        <Carousel
          style={{
            display: "flex",
            flexDirection: `${windowSize[0] > 960 ? "row " : "column-reverse"}`,
          }}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className="w-72 md:w-[700px] lg:w-[1000px] my-10 md:my-0">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-12">
                      <Circle
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                        className="rounded-full "
                        style={{ margin: "0px" }}
                      >
                        {page === 0 && (
                          <>
                            <BsShieldCheck className="text-4xl font-bold" />
                          </>
                        )}
                        {page === 1 && (
                          <TbScreenShare className="text-4xl font-bold" />
                        )}
                        {page === 2 && (
                          <AiOutlineCloudDownload className="text-4xl font-bold" />
                        )}
                      </Circle>
                      <div className="flex items-center">
                        {page === 0 && (
                          <div className="w-72 py-2.5">
                            <Typography variant="h5">Make a Profile</Typography>
                            <Typography className="break-normal">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's
                            </Typography>
                          </div>
                        )}
                        {page === 1 && (
                          <div className="w-72 py-2.5">
                            <Typography variant="h5">
                              Download it for free
                            </Typography>
                            <Typography>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's
                            </Typography>
                          </div>
                        )}
                        {page === 2 && (
                          <div className="w-72 py-2.5">
                            <Typography variant="h5">Enjoy this app</Typography>
                            <Typography>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's
                            </Typography>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        >
          <img src={img1} alt="..." className="w-72 pt-2" />
          <img src={img2} alt="..." className="w-72 pt-2" />
          <img src={img3} alt="..." className="w-72 pt-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default AppFunction;
