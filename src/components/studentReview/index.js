import React from "react";

const StudentReview = (props) => {
  const starStyle = {
    color: "#fcd303",
  };

  return (
    <div className="mx-5 my-5 p-5 border-solid bg-opacity-10 shadow-3xl hover:shadow-xl hover:bg-opacity-0 rounded-[30px] bg-webGreen">
      <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
      <p className="pt-5 text-xl">{props.name}</p>
      <i className="fa-solid fa-star pt-2 font-bold ml-2" style={starStyle}>
        4.5/5 Ratings
      </i>
      <p className="text-xl tracking-widest pt-5">{props.para}</p>
    </div>
  );
};

export default StudentReview;
