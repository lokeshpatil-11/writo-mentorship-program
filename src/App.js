import React from "react";
import Landing from "./components/landing/Index";
import googleImg from "./images/googleImg.png";
import appleImg from "./images/appleimg.png";
import amazonImg from "./images/amazonImg.png";
import airbnbImg from "./images/airbnbImage.png";
import microsoftImg from "./images/microsoftImg.png";
import youtubeImg from "./images/youtubeImg.png";
import GettingStarted from "./components/steps";
import MmentorImg from "./images/MmentorImg.png";
import Mentors from "./Student_Section/Mentors";
import RoadMap from "./components/roadmap";
import "./App.css";
import StudentReview from "./components/studentReview";
import Steps from "./Student_Section/Steps";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Overview from "./Student_Section/Overview";
import FAQS from "./Student_Section/FAQS";
import LandingImg from "./images/landing_img.svg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function App() {
  return (
    <div className="w-min-{370px}">
      <Landing
        heading1='"Your Success,'
        heading2="Our Focus:"
        heading3=" 1:1 "
        heading4='Mentorship Awaits!"'
        para1='"Discover a personalized mentorship program designed to guide you towards your goals with expert support and customized strategies."'
        button="Let's Start Your Journey"
        para3="Our Mentees Placed At"
        googleImg={googleImg}
        appleImg={appleImg}
        amazonImg={amazonImg}
        airbnbImg={airbnbImg}
        microsoftImg={microsoftImg}
        youtubeImg={youtubeImg}
        MmentorImg={MmentorImg}
        LandingImg={LandingImg}
      />
      <Overview />
      <div className="flex">
        <h1 className="text-left xxs:mt-[5rem] md:mt-[10rem] xxs:ml-2  lg:ml-9 xxs:mb-[1rem] md:mb-[3rem] pb-3 overflow-hidden whitespace-nowrap animate-type font-raleway  font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-3xl xs:pl-1 xxs:text-xl">
          Getting
          <span className="text-webRed xxs:px-1 sm:px-2">started</span>
          <span>is</span>
          <span className="text-webRed xxs:pl-1  sm:pl-2">
            {window.innerWidth <= 500 ? <br /> : ""}easy!
          </span>
        </h1>
      </div>

      <div className="flex justify-evenly xxs:flex-col lg:flex-row xxs:mx-2 md:mx-8 ">
        <GettingStarted
          heading="Getting started is easy!"
          number="1"
          description="Shortlist Your Mentor acording to your preferences"
          btn="View Mentors ->"
        />

        <GettingStarted
          number="2"
          description="Book a free trial session to see how the mentor can help you"
          btn="Book Free Trial ->"
        />

        <GettingStarted
          number="3"
          description="Start preparing via 1:1 long term mentorship with your mentor"
          btn="Get Started ->"
        />
      </div>

      <div className="xxs:mt-[5rem] flex lg:mt-[10rem] xxs:ml-5 lg:ml-9">
        <h2 className="text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap  animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-4xl xxs:text-2xl">
          How it
          <span className="text-webRed pl-1">Works?</span>
        </h2>
      </div>

      <div className="flex lg:justify-around lg:mt-[5rem]  items-center  xxs:flex-col xxs:ml-2 md:mx-8 lg:flex-row ">
        <RoadMap />
      </div>

      <div className="xxs:mt-[1rem] flex-col md:my-[5rem]   lg:mt-[10rem] lg:ml-8 mb-5 xs:ml-0 xxs:ml-3 xs:mx-4">
        <h2 className="lg:text-left xs:ml-2 xs:text-center lg:ml-5 pb-1 overflow-hidden whitespace-nowrap font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-3xl xxs:text-[17px]">
          You too can <span className="text-webRed">get</span> into your
          <span className="text-webRed ">
            {window.innerWidth <= 500 ? <br /> : ""} dream company!
          </span>
        </h2>
      </div>
      {/*       
      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-2 lg:grid-rows-2  xxs:flex xxs:flex-col"> */}
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        className="craw"
      >
        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
        />

        <StudentReview
          img={MmentorImg}
          name="lokesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
        />

        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
        />

        <StudentReview
          img={MmentorImg}
          name="lokesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
        />
      </Carousel>

      <Steps />
      <Mentors />
      <FAQS />
    </div>
  );
}

export default App;
