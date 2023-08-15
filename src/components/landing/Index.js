import React from "react";
import "./index.css";

const Landing = (props) => {
  const starStyle = {
    color: "#fcd303",
  };

  return (
    <>
      <div className="flex xxs:flex-col lg:flex-row justify-evenly xxs:px-2 md:px-5 xxs:py-[2rem] sm:py-[4rem] lg:pt-[10rem] bg-webRed bg-opacity-5">
        <div className="flex-row md:mx-7">
          <h1 className=" text-left  pb-3 overflow-hidden whitespace-nowrap  animate-typing font-raleway   font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl px-2">
            {props.heading1}
            <span className="text-webRed px-2 font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
              {props.heading2}
            </span>
            <br />
            <span>{props.heading3}</span>
            <span className="text-webRed pl-2 font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">
              {props.heading4}
            </span>
          </h1>

          <p className="text-left justify-start font-raleway font-mediam xl:text-2xl lg:text-xl md:text-xl tracking-widest  xxs:text-base pt-5 px-2 xxs:pt-3">
            {props.para1}
          </p>

          <button className="bg-btn xxs:mt-4 mx-1 md:ml-0 lg:ml-2 xxs:ml-[0 rem]  opacity-75 border-none hover:opacity-100  text-white p-3 mt-7 hover:scale-105 box-border hover:shadow-2xl rounded-xl">
            {props.button}
          </button>
        </div>
        <div className="w-[100%] xxs:mt-6 lg:pr-7">
          <img
            src={props.MentorshipImg}
            alt="mentorship img"
            className=" animate-mover mix-blend-multiply lg:w-[100%]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  bg-webRed bg-opacity-5 xxs:pt-5">
        <img src={props.MmentorImg} className="w-7 h-7" alt="mentor img" />
        <i className="fa-solid fa-star font-bold pt-2" style={starStyle}>
          4.5/5 Ratings
        </i>

        <div className="  pt-5 xxs:flex-col lg:flex-row w-[80%] ">
          <p className="font-raleway text-center xxs:text-2xl sm:text-3xl lg:mr-3 xxs:mb-5">
            {props.para3}
          </p>
          <marquee behavior="" direction="">
            <div className="flex justify-center mb-5 ">
              <img
                src={props.googleImg}
                alt="google img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2 "
              />
              <img
                src={props.appleImg}
                alt="apple img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2"
              />
              <img
                src={props.microsoftImg}
                alt="microsoft img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2"
              />
              <img
                src={props.amazonImg}
                alt="amazon img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2"
              />
              <img
                src={props.airbnbImg}
                alt="airbnb img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2"
              />
              <img
                src={props.youtubeImg}
                alt="youtube img"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 sm:mr-5 xxs:w-3 xxs:h-3 xxs:mr-2"
              />
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Landing;
