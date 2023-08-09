import React from "react";
import YouTube from "react-youtube";

const StudentReview = (props) => {
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
  const starStyle = {
    color: "#fcd303",
  };

  return (
    <div className="mx-5 my-3 p-3 border-solid bg-opacity-10 shadow-3xl hover:shadow-4xl hover:bg-opacity-20 rounded-[30px] bg-webGreen">
      <div className="flex items-center">
        <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
        <p className="pt-5 ml-5 text-2xl">{props.name}</p>
      </div>

      <i className="fa-solid fa-star pt-5 font-bold ml-2" style={starStyle}>
        4.5/5 Ratings
      </i>
      <p className="text-xl text-left tracking-wide pt-5">{props.para}</p>
      <div className="flex justify-center items-center p-5">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default StudentReview;
