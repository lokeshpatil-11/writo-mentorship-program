import React from "react";
import "./index.css";

const Landing = (props) => {
  const starStyle = {
    color: "#fcd303",
  };

  return (
    <>
      <div className="flex xxs:flex-col lg:flex-row justify-evenly xxs:px-2 md:pl-5 md:pr-0 xxs:py-[2rem] sm:py-[4rem] lg:pt-[10rem] bg-webRed bg-opacity-5">
        <div className="flex-row md:mx-5">
          <h1 className=" text-left  pb-3 overflow-hidden whitespace-nowrap  animate-typing font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl px-2 xs:text-3xl xxs:text-xl">
            {props.heading1}
            <span className="text-webRed px-2 font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl  xs:text-3xl xxs:text-xl">
              {props.heading2}
            </span>
            <span>{props.heading3}</span><br />
            <span className="text-webRed pl-2 font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl  xs:text-3xl xxs:text-xl">
              {props.heading4}
            </span>
          </h1>

          <p className="text-left justify-start font-raleway font-mediam xl:text-xl lg:text-lg md:text-base tracking-widest  xxs:text-[10px] pt-5 pl-2 lg:pr-6 xxs:pt-3">
            {props.para1}
          </p>

          <button className="font-semibold bg-btn xxs:mt-4 md:mx-1 xxs:mx-7 md:ml-0 lg:ml-2 xxs:ml-[0 rem]  opacity-75 border-none hover:opacity-100  text-white xxs:text-[10px] md:text-base xxs:p-1 md:px-3 mt-7 hover:scale-105 box-border hover:shadow-2xl rounded-xl">
            {props.button}
          </button>
        </div>
        <div className="xxs:mt-0 lg:pr-7 pl-7">
          <img
            src={props.LandingImg}
            alt="mentorship img"
            className=" lg:h-[500px] mix-blend-multiply lg:w-[2000px] pt-0"
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
