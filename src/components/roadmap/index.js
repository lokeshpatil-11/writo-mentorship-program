import React from "react";
import "./index.css";

const RoadMap = (props) => {
  return (
    <div className="flex  mx-auto xxs:mx-[1rem] container mb-[5rem] overflow-hidden cursor-pointer mt-8">
      <div className="flex flex-col lg:ml-5 items-center mr-5 xxs:mr-3  box-border hover:h-[100%]">
        <span className="w-6 h-6 xxs:w border-solid border-4 bg-transparent hover:bg-webGreen "></span>
        <span className="w-[3px] h-[200px] border-solid border-2 bg-transparent "></span>
        <span className="w-[6px] h-[6px] border-solid border-2 bg-transparent"></span>
      </div>
      <div>
        <h3 className="text-webRed font-bold xxs:text-sm sm:text-xl md:text-2xl">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default RoadMap;
