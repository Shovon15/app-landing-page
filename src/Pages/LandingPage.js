import React from "react";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Nav from "./Navbar/Nav";
import Review from "./ClientReview/Review";
import Footer from "./Footer/Footer";
import Features from "./Feature/Features";
import WhyThisApp from "./WhyThisApp/WhyThisApp";
import AppFunction from "./AppFunction/AppFunction";
import BannerCard from "./Banner/BannerCard";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <BannerCard />
      <Features />
      <AppFunction />
      <WhyThisApp />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
