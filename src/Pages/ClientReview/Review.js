import React from "react";

import Carousel from "react-elastic-carousel";
import avatar1 from "../../assets/review/user5.jpg";
import avatar2 from "../../assets/review/user6.jpg";
import avatar3 from "../../assets/review/user4.jpg";
import CarouselCard from "../../Components/Card/CarouselCard";
import { useState } from "react";
import { useEffect } from "react";

const Review = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  // console.log(windowWidth);

  const items = [
    {
      avatar: avatar1,
      name: "Danny Sims",
      desig: "Swap",
      review: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "John Smith",
      desig: "Swap",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar1,
      name: "Taya Barr",
      desig: "Swap",
      review: 3.2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Omar Hodge",
      desig: "Swap",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "Ellis Jarvis",
      desig: "Swap",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Jenny Stein",
      desig: "Swap",
      review: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Omar Hodge",
      desig: "Swap",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar2,
      name: "Ellis Jarvis",
      desig: "Swap",
      review: 4.5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text .",
    },
    {
      avatar: avatar3,
      name: "Jenny Stein",
      desig: "Swap",
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
      itemsToShow: 2,
    },
  ];
  let length = 8;
  if (windowWidth >= 550) {
    length = 7;
  }
  return (
    <div id="review" className="min-h-max bg-slate-100 p-5 md:p-10">
      <p className="text-primary  text-start md:text-center text-3xl md:text-5xl font-bold p-2">
        Why people are using supershop
      </p>
      <p className="text-xl text-start md:text-center p-2 pb-5">
        Join millions of other customer on this platform
      </p>
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        enableMouseSwipe={true}
        itemsToScroll={1}
        pagination={false}
        enableAutoPlay={true}
        autoPlaySpeed={2500}
        onNextEnd={({ index }) => {
          // console.log("index", index, "length", items.length);
          if (index === length) {
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
