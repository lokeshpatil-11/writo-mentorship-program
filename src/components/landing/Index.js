import React from "react";

const Landing = (props) => {
  const starStyle = {
    color: "#fcd303",
  };
  return (
    <div className="flex flex-col w-min items-center mx-auto xs:mt-[2rem] lg:mt-[15rem]">
      <h1 className="text-center pb-3 text-webGreen overflow-hidden whitespace-nowrap  animate-typing font-raleway italic  font-bold xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl ">
        {props.heading}
      </h1>
      <p className="text-center font-raleway font-mediam xl:text-3xl lg:text-2xl md:text-xl tracking-widest sm:text-base xs:text-base  px-[auto] pt-5">
        {props.para1}
      </p>
      <p className="text-center font-raleway  font-mediam xl:text-3xl lg:text-2xl md:text-xl tracking-widest sm:text-base xs:text-base px-[auto] ">
        {props.para2}
      </p>
      <button className="bg-btn opacity-75 hover:opacity-100 text-white p-3 mt-7 hover:scale-105 box-border hover:shadow-2xl rounded-xl ">
        {props.button}
      </button>

      <div className="flex justify-center items-center mt-4">
        <img src={props.MmentorImg} className="w-7 h-7" alt="mentor img" />
        <i className="fa-solid fa-star font-bold ml-2" style={starStyle}>
          4.5/5 Ratings
        </i>
      </div>

      <div className="flex items-center mx-auto mt-7 xxs:flex-col lg:flex-row  ">
        <p className="font-raleway text-xl lg:mr-3 lg:mb-0 xs:mb-3">
          {props.para3}{" "}
        </p>
        <div className="flex">
          <img
            src={props.googleImg}
            alt="google img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
          <img
            src={props.appleImg}
            alt="apple img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
          <img
            src={props.microsoftImg}
            alt="microsoft img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
          <img
            src={props.amazonImg}
            alt="amazon img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
          <img
            src={props.airbnbImg}
            alt="airbnb img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
          <img
            src={props.youtubeImg}
            alt="youtube img"
            className="sm:w-5 sm:h-5 sm:mr-4 xxs:w-3 xxs:h-3 xxs:mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
