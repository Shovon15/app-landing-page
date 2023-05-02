import React from "react";

import Carousel from "react-elastic-carousel";
import avatar1 from "../../assets/review/user5.jpg";
import avatar2 from "../../assets/review/user6.jpg";
import avatar3 from "../../assets/review/user4.jpg";
import clientImg from "../../assets/section icons/client.png";

import SectionTitle from "../../Components/Text/SectionTitle";
import CarouselCard from "../../Components/Card/CarouselCard";

const Review = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;

  const items = [
    {
      avatar: avatar1,
      name: "Danny Sims",
      desig: "Lorem Ipsum",
      review: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "John Smith",
      desig: "Lorem Ipsum is",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar1,
      name: "Taya Barr",
      desig: "Lorem Ipsum is",
      review: 3.2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Omar Hodge",
      desig: "Lorem Ipsum",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "Ellis Jarvis",
      desig: "Lorem Ipsum is",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Jenny Stein",
      desig: "Lorem Ipsum ",
      review: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Omar Hodge",
      desig: "Lorem Ipsum",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "Ellis Jarvis",
      desig: "Lorem Ipsum is",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Jenny Stein",
      desig: "Lorem Ipsum ",
      review: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
  ];

  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 550,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 2,
    },
    {
      width: 1000,
      itemsToShow: 3,
    },
  ];
  return (
    <div id="review" className="min-h-max bg-slate-100 py-5 md:py-10">
      <img src={clientImg} alt="..." className="w-20  mx-auto" />
      <SectionTitle title="Client Review" />
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        enableMouseSwipe={true}
        // itemsToShow={3}
        itemsToScroll={1}
        // renderArrow={myArrow}
        pagination={false}
        // renderPagination={myPagination}
        enableAutoPlay={true}
        autoPlaySpeed={2500}
        onNextEnd={({ index }) => {
          // console.log("index", index, "length", items.length);
          if (index === 6) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 2000); // same time
          }
        }}
      >
        {items.map((item, i) => (
          <CarouselCard key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Review;
