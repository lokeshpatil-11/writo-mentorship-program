import React from "react";
import YouTube from "react-youtube";
const YouTubeVideo = (props) => {
  return (
    <div className="xxs:mx-2 md:mx-5 pb-[3rem] lg:mx-0 lg:py-5 md:px-5 bg-opacity-10 shadow-3xl hover:shadow-xl hover:bg-opacity-0 rounded-[30px] bg-webGreen">
      <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
      <p className="py-5 text-xl pl-2">{props.name}</p>
      <div className="overflow-hidden   xxs:rounded-[20px]  flex justify-center items-center ">
        <YouTube videoId={props.videoId} opts={props.opts} />
      </div>
    </div>
  );
};

export default YouTubeVideo;
