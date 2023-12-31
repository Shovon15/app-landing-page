import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-scroll";
import bannerImg from "../../assets/screen/supershop.png";

const Banner = () => {
	return (
		<div id="home" className="flex flex-col lg:flex-row px-5 md:px-10 py-5 bg-slate-300 min-h-max">
			<div className="w-full lg:w-13/24 flex flex-col justify-center md:p-2 gap-4">
				{/* <p className="font-extrabold text-start text-4xl md:text-6xl">
          Accounting and <span className="text-primary">business</span> all in
          one place
        </p> */}
				<p className="font-extrabold text-start text-3xl md:text-5xl">
					Supercharge Your Retail Business with <span className="text-primary">Supershop's</span> All-in-One
					Retail Management Platform
				</p>
				{/* <p className="text-lg text-start  text-wrap py-2">
          Supershop can handle all of your financial management needs, including
          accounts payable and receivable, general ledger, and financial
          statements.
        </p> */}
				<p className="text-lg text-start  text-wrap py-2">
					Seamlessly manage multi-channel sales, get real-time inventory For your brand new and pre-owned
					product business
				</p>

				<div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-4">
					<Link to="register" spy={true} smooth={true} activeClass="active" offset={-60} duration={500}>
						<Button className="bg-buttonColor ">Start A Free Trial</Button>
					</Link>
					{/* <Button
            variant="outlined"
            className="border-buttonColor text-buttonColor  focus:ring-0"
          >
            Request A Demo
          </Button> */}
				</div>
			</div>
			<div className="w-full lg:w-11/24 md:p-2 mt-5 md:mt-0 ">
				{/* <video className="h-full w-full rounded-lg" controls autoPlay>
          <source src="" type="video/mp4" />
        </video> */}
				<img src={bannerImg} alt="..."></img>
			</div>
		</div>
	);
};

export default Banner;
