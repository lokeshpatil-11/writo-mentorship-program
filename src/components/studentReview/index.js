import React from "react";

const StudentReview = (props) => {
 

  return (
    <div className="mx-5 my-3 p-3 border-solid bg-opacity-10 shadow-3xl hover:shadow-4xl hover:bg-opacity-20 rounded-[30px] bg-webGreen">
      <div className="flex items-center">
        <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
        <p className="pt-5 ml-5 text-2xl">{props.name}</p>
      </div>

      <p className="pt-5 ml-5 text-webRed text-2xl font-semibold">Writo Pvt Ltd.</p>
      <p className="text-xl text-left tracking-wide pt-5">{props.para}</p>
      <div className="flex justify-center items-center ">
        <iframe
          className="xxs:w-[200px] xxs:pt-2 xs:w-[230px] sm:w-[400px] sm:h-[350px] sm:my-3 md:w-[600px] lg:w-[1000px] "
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
