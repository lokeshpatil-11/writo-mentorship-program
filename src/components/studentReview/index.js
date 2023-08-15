import React from "react";

const StudentReview = (props) => {
  return (
    <div className="xxs:mr-2 my-3 p-2 lg:mr-4 border-solid w-[100%] bg-opacity-10 mb-5 shadow-3xl hover:shadow-4xl hover:bg-opacity-20 rounded-[30px] bg-webGreen">
      <div className="flex items-center">
        <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
        <p className="pt-5 md:ml-5 xxs:ml-2 text-2xl">{props.name}</p>
      </div>

      <p className="pt-5 ml-2 text-webRed text-2xl font-semibold text-left">
        Writo Pvt Ltd.
      </p>
        <p className="text-base text-left tracking-wide pt-5">{props.para}</p>
      <div className="flex justify-center items-center ">
        <iframe
          className="xxs:w-[190px] xxs:pt-2 xs:w-[230px] sm:w-[300px] sm:h-[350px] sm:my-3 md:w-[250px] lg:w-[300px] lg:h-[200px] rounded-3xl border-solid border-webGreen"
          src="https://www.youtube.com/embed/J-vJMlJHpGU"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default StudentReview;
