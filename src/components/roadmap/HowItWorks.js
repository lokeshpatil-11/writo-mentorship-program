import React from "react";
import RoadMap from "./index";
import mentorshipPathImg from "../landing/images/mentorship-path.png";
export default function HowItWorks() {
  return (
    <div>
      <div className="xxs:mt-[5rem] xxs:text-center lg:mt-[10rem] lg:ml-9">
        <h2 className="lg:text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap  animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-5xl sm:text-[35px] xs:text-4xl xxs:text-3xl">
          How it
          <span className="text-webRed pl-1">Works?</span>
        </h2>
      </div>

      <div className="flex lg:justify-around lg:mt-[5rem]  items-center  xxs:flex-col xxs:ml-2 md:mx-8 lg:flex-row ">
        <RoadMap mentorshipPathImg={mentorshipPathImg} />
      </div>
    </div>
  );
}
