import React from "react";

import "./index.css";

const RoadMap = (props) => {
  return (
    <div className="flex xxs:flex-col lg:flex-row lg:mx-7 xxs:px-5 ">
      <img
        src={props.mentorshipPathImg}
        alt="mentorship path"
        className="xxs:w-[100%]"
      />
    </div>
  );
};

export default RoadMap;
