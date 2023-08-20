import React from 'react'
import GettingStarted from './index'
export default function GetStart() {
  return (
    <div>
        <div className="sm:text-center ">
        <h1 className="lg:text-left  xxs:mt-[5rem] md:mt-[10rem] xxs:ml-2 sm:ml-0 lg:ml-9 xxs:mb-[1rem] md:mb-[3rem] pb-3   font-raleway  font-bold xl:text-6xl lg:text-5xl md:text-5xl sm:text-[35px] xs:text-[27.5px]  xxs:text-[22px]">
          Getting
          <span className="text-webRed xxs:px-1 sm:px-2">started</span>
          <span>is</span>
          <span className="text-webRed xxs:pl-1  sm:pl-2">easy!</span>
        </h1>
      </div>

      <div className="flex  xxs:flex-col lg:flex-row xxs:mx-2 md:mx-8 lg:mx-9 ">
        <GettingStarted
          heading="Getting started is easy!"
          number="1"
          description="Shortlist Your Mentor acording to your preferences"
          btn="View Mentors ->"
        />

        <GettingStarted
          number="2"
          description="Book a free trial session to see how the mentor can help you"
          btn="Book Free Trial ->"
        />

        <GettingStarted
          number="3"
          description="Start preparing via 1:1 long term mentorship with your mentor"
          btn="Get Started ->"
        />
      </div>
    </div>
  )
}
