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

import RoadMap from "./components/roadmap";
import MentorshipImg from "./images/ementorshipImg.png";
import "./App.css";
import StudentReview from "./components/studentReview";

function App() {
  return (
    <div className="w-min-{370px}">
      <Landing
        heading1="Want"
        heading2="1:1"
        heading3="personalized"
        heading4="mentorship?"
        para1="Then you came to the right place. We offer long term mentorship with industry experts to help you achieve your dream career. "
        button="Select Your Mentor"
        para3="Our Mentees Placed At"
        googleImg={googleImg}
        appleImg={appleImg}
        amazonImg={amazonImg}
        airbnbImg={airbnbImg}
        microsoftImg={microsoftImg}
        youtubeImg={youtubeImg}
        MmentorImg={MmentorImg}
        MentorshipImg={MentorshipImg}
      />
      <div className="flex">
        <h1 className="text-left  xxs:mt-[5rem] md:mt-[10rem] xs:ml-7 lg:ml-9 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap animate-type font-raleway  font-bold xl:text-5xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl">
          Getting
          <span className="text-webRed px-2">started</span>
          <span>is</span>
          <span className="text-webRed pl-2">easy!</span>
        </h1>
      </div>

      <div className="flex justify-evenly xxs:flex-col lg:flex-row mx-5 ">
        <GettingStarted
          heading="Getting started is easy!"
          number="1"
          description="Shortlist a mentor according to your preferences"
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

      <div className="xxs:mt-[5rem] flex lg:mt-[10rem] xxs:ml-7 lg:ml-9">
        <h2 className="text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap  animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-4xl xxs:xl">
          How it
          <span className="text-webRed pl-1">Works?</span>
        </h2>
      </div>

      <div className="flex lg:justify-around lg:mt-[5rem]  items-center  xxs:flex-col xxs:ml-2 lg:flex-row ">
        <RoadMap />
      </div>

      <div className="xxs:mt-[5rem] flex-col md:my-[5rem] lg:mt-[10rem] ml-8">
        <h2 className="text-left xs:ml-2 lg:ml-5 pb-1 overflow-hidden whitespace-nowrap animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl xxs:xl">
          You too can get into your
        </h2>
        <h2 className="text-left xs:ml-2 lg:ml-5 mb-[3rem] pb-2 text-webRed overflow-hidden whitespace-nowrap animate-type delay-1000 font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl xxs:xl">
          dream company!
        </h2>
      </div>

      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-2 lg:grid-rows-2  xxs:flex xxs:flex-col">
        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <StudentReview
          img={MmentorImg}
          name="lokesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <StudentReview
          img={MmentorImg}
          name="lokesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />
      </div>
    </div>
  );
}

export default App;
