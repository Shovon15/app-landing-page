import React from "react";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Nav from "./Navbar/Nav";
// import Review from "./ClientReview/Review";
import Footer from "./Footer/Footer";
import Features from "./Feature/Features";
import BannerCard from "./Banner/BannerCard";
import Register from "./Register/Register";
import Pricing from "./Pricing/Pricing";
import FreeTrial from "./FreeTrialSection/FreeTrial";
import Form from "../Components/Form/Form";
import RegistrationForm from "../Components/Form/RegistrationForm";

const LandingPage = () => {
	return (
		<div>
			<Nav />
			<Banner />
			<BannerCard />
			<Features />
			<Register />
			{/* <Review /> */}
			<Pricing />
			<Faq />
			<FreeTrial />
			<Form />
			{/* <RegistrationForm /> */}
			<Footer />
		</div>
	);
};

export default LandingPage;
