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
import ArrowImg from "./images/arrowImg.png";
import RoadMap from "./components/roadmap";
import "./App.css";
import StudentReview from "./components/studentReview";
import YouTubeVideo from "./components/studentReview/YouTubeVideo";

function App() {
  const videoId = "J-vJMlJHpGU";
  const opts = {
    height: "240",
    width: "500",
    playerVars: {
      controls: 0,
      host: "http://www.youtube.com",
      autohide: 1,
      autoplay: 1,
    },
  };
  return (
    <div className="w-min-{370px}">
      <Landing
        heading="Want 1:1 personalized mentorship?"
        para1="Then you came to the right place. We offer long term mentorship with industry experts to "
        para2="help you achieve your dream career."
        button="Select Your Mentor"
        para3="Our Mentees Placed At"
        googleImg={googleImg}
        appleImg={appleImg}
        amazonImg={amazonImg}
        airbnbImg={airbnbImg}
        microsoftImg={microsoftImg}
        youtubeImg={youtubeImg}
        MmentorImg={MmentorImg}
      />
      <div className="flex">
        <h1 className="text-left xxs:mt-[5rem] md:mt-[10rem]  xs:ml-2 lg:ml-5 mb-[3rem] pb-3 text-webGreen overflow-hidden whitespace-nowrap  animate-typing font-raleway italic  font-bold xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl">
          Getting started is easy!
        </h1>
      </div>

      <div className="flex justify-evenly xxs:flex-col lg:flex-row mx-5 ">
        <GettingStarted
          heading="Getting started is easy!"
          number="1"
          description="Shortlist a mentor according to your preferences"
          btn="View Mentors"
        />
        <img
          src={ArrowImg}
          alt="arrow-img"
          className="w-6 h-7 opacity-20 xxs:hidden lg:rotate-45 lg:block  "
        />

        <GettingStarted
          number="2"
          description="Book a free trial session to see how the mentor can help you"
          btn="Book Free Trial"
        />
        <img
          src={ArrowImg}
          alt="arrow-img"
          className="w-6 h-7 opacity-20 xxs:hidden lg:rotate-45 lg:block "
        />

        <GettingStarted
          number="3"
          description="Start preparing via 1:1 long term mentorship with your mentor"
          btn="Get Started"
        />
      </div>

      <div className="xxs:mt-[5rem] flex lg:mt-[15rem]">
        <h2 className="text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 text-webGreen overflow-hidden whitespace-nowrap  animate-typing font-raleway italic  font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-4xl xxs:xl">
          How it Works?
        </h2>
      </div>

      <div className="flex lg:justify-evenly lg:mt-[5rem]  items-center md:mx-auto xxs:flex-col xxs:ml-2 lg:flex-row ">
        <div className="flex lg:relative">
          <RoadMap title="loren Ipsom1" />
          <RoadMap title="loren Ipsom2" className="" />
        </div>

        <div className="flex ">
          <RoadMap title="loren Ipsom3" />
          <RoadMap title="loren Ipsom4" />
        </div>

        <div className="flex">
          <RoadMap title="loren Ipsom5" />
          <RoadMap title="loren Ipsom6" />
        </div>
      </div>

      <div className="xxs:mt-[5rem] flex md:my-[5rem] lg:mt-[10rem] ">
        <h2 className="text-left xs:ml-2 lg:ml-5 mb-[3rem] pb-3 text-webGreen overflow-hidden whitespace-nowrap  animate-typing font-raleway italic  font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl xxs:xl">
          You too can get into your dream company!
        </h2>
      </div>

      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-3 lg:grid-rows-2  xxs:flex xxs:flex-col">
        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <YouTubeVideo
          videoId={videoId}
          opts={opts}
          name="Lokesh Patil"
          img={MmentorImg}
        />

        <StudentReview
          img={MmentorImg}
          name="bhavesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <StudentReview
          img={MmentorImg}
          name="Naman"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />

        <YouTubeVideo
          videoId={videoId}
          opts={opts}
          name="Lokesh Patil"
          img={MmentorImg}
        />

        <StudentReview
          img={MmentorImg}
          name="bhavesh"
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point and I am already seeing improvement in my interview readiness after following his instructions."
        />
      </div>
    </div>
  );
}

export default App;
