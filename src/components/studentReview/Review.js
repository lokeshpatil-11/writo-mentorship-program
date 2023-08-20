import React from 'react'
import StudentReview from './index'
import Carousel from 'react-multi-carousel'
import MmentorImg from '../landing/images/MmentorImg.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

export default function Review() {
  return (
    <div>
        <div className="xxs:mt-[1rem]  md:my-[5rem]   lg:mt-[10rem] lg:ml-8 mb-5 xs:ml-0 xxs:ml-3 xs:mx-4">
        <h2 className="lg:text-center xs:ml-2 xs:text-center lg:ml-5 pb-1 overflow-hidden whitespace-nowrap font-raleway   font-bold xl:text-6xl lg:text-6xl md:text-5xl sm:text-[2rem] xs:text-[1.7rem] xxs:text-[23px]">
          You too can <span className="text-webRed">get</span> into your
          <br />
          <span className="text-webRed ">
            {window.innerWidth <= 1000 ? <br /> : ""} dream company!
          </span>
        </h2>
      </div>
      {/*       
      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-2 lg:grid-rows-2  xxs:flex xxs:flex-col"> */}
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        className="craw"
      >
        <StudentReview
          img={MmentorImg}
          name="Sujit Kumar"
          companyname=""
          para='"Harsh used to continuously keep a check on me. If I am doing well mentally. If I am executing my tasks. If I am on the right track"'
          video="https://www.youtube-nocookie.com/embed/J-vJMlJHpGU?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Kaushik Mukherjee"
          companyname=""
          para='"Thank you Sushrut for supporting me like a big brother, and helping me improve constantly"'
          video="https://www.youtube-nocookie.com/embed/BOvo-VwQ4y8?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Aditya Vardhan"
          companyname=""
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
          video="https://www.youtube-nocookie.com/embed/-Otv_sYGlak?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Lokesh"
          companyname=""
          para="Mentors at writo are amazing. They keep track of your progress through each round. Nimesh constantly advises new methods and adds to your knowledge. During the mock interview, he is quite professional and takes notes of my performance. I'm highly satisfied with Nimesh's technique of interviewing and his detailed feedback."
          video=""
        />
      </Carousel>
    </div>
  )
}
