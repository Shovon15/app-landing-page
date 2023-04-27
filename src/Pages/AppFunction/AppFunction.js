// import SectionHeading from "../../../Components/Text/SectionHeading";
import Carousel from "react-elastic-carousel";
// import Item from "../Item";
import "./AppFunction.css";
// import Flex from "./Flex";
// import Square from "./Square";

import { BsShieldCheck } from "react-icons/bs";
import { TbScreenShare } from "react-icons/tb";
import { AiOutlineCloudDownload } from "react-icons/ai";
import img1 from "../../assets/screen/ss1.png";
import img2 from "../../assets/screen/ss3.png";
import img3 from "../../assets/screen/ss4.png";
import bgImg from "../../assets/screen/mok-i-phone.png";
import appImg from "../../assets/section icons/how-app-work.png";
import SectionTitle from "../../Components/Text/SectionTitle";
import Square from "./Square";
import Flex from "./Flex";

const AppFunction = () => {
  //   const items = [
  //     {
  //       img: img1,
  //     },
  //     {
  //       img: img2,
  //     },
  //     {
  //       img: img3,
  //     },
  //   ];
  return (
    <div
      id="how_its_work"
      className=" min-h-screen p-0 hidden md:block bg-gray-200"
    >
      <img src={appImg} alt="..." className="w-20 m-1 mx-auto" />
      <SectionTitle title="How App Works" />

      <div className="flex relative w-4/5">
        <img src={bgImg} alt="..." className="w-80 absolute left-[235px]" />
        <Carousel
          className=""
          style={{
            display: "flex",
            flexDirection: "row",
            // width: "2/3",
            // height: "100vh",
            // backgroundColor: "#000000",
            // border: "1px solid blue",
          }}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Flex
                direction="column"
                style={{
                  // border: "1px solid red",
                  width: "400px",
                }}
              >
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <Square
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                      className="rounded-full"
                    >
                      {page === 0 && (
                        <BsShieldCheck className="text-5xl font-bold" />
                      )}
                      {page === 1 && (
                        <TbScreenShare className="text-5xl font-bold" />
                      )}
                      {page === 2 && (
                        <AiOutlineCloudDownload className="text-5xl font-bold" />
                      )}
                    </Square>
                  );
                })}
              </Flex>
            );
          }}
        >
          <img src={img1} alt="..." className="w-52 pt-2" />
          <img src={img2} alt="..." className="w-52 pt-2" />
          <img src={img3} alt="..." className="w-52 pt-2" />
        </Carousel>
        {/* <div className="w-1/2">
          <h1>gkgkgkf</h1>
        </div> */}
      </div>
    </div>
  );
};

export default AppFunction;
