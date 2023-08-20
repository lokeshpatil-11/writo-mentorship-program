import React from "react";
import Mentors from "./components/Mentors/Mentors";
import "./App.css";
import Steps from "./components/Msteps/Steps";
import "react-multi-carousel/lib/styles.css";
import Overview from "./components/Overview/Overview";
import FAQS from "./components/FAQ/FAQS";
import "./style.css";
import LandingPage from "./components/landing/LandingPage";
import GetStart from "./components/steps/GetStart";
import HowItWorks from "./components/roadmap/HowItWorks";
import Review from "./components/studentReview/Review";

function App() {
  return (
    <div className="w-min-{370px}">
      <LandingPage/>
      <Overview />
      <GetStart/>
      <HowItWorks/>
      <Review/>      

      

      <Steps />
      <Mentors />
      <FAQS />
    </div>
  );
}

export default App;
