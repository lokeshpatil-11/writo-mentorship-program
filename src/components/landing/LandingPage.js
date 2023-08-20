import React from 'react'
import Landing from './Index'
import googleImg from "./images/googleImg.png";
import MmentorImg from "./images/MmentorImg.png";
import appleImg from "./images/appleimg.png";
import amazonImg from "./images/amazonImg.png";
import airbnbImg from "./images/airbnbImage.png";
import microsoftImg from "./images/microsoftImg.png";
import youtubeImg from "./images/youtubeImg.png";
import LandingImg from "./images/landing_img.svg";
export default function LandingPage() {
  return (
    <div>
        <Landing
        heading1="Your Success,"
        heading2="Our Focus:"
        heading3=" 1:1 "
        heading4="Mentorship Awaits!"
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
    </div>
  )
}
