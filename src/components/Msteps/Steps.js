import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Steps = () => {
  return (

    <div className='project-section-bg pb-7 stepsbg'>
      <div>
        <div className='mt-7'>
          <div className='pt-7 px-3 pb-7 text-center'>
            <h1 className='text-xl md:text-5xl xs:text-3xl font-bold' style={{ color: '#fff' }}>Start<span style={{color:'#ee4962'}} > Mentorship </span> today</h1>
            <h1 className='mt-3 text-xl md:text-5xl xs:text-3xl font-bold'style={{ color: '#fff' }}><span style={{color:'#ee4962'}} >You'll
            </span> never <span style={{color:'#ee4962'}} >look</span> back.</h1>
          </div>
          <div className='mt-4 grid justify-center lg:grid-cols-3 md:grid-cols-2 gap-y-5  md:gap-y-6 lg:px-9 md:px-7'>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
              <div className='card-body'>
                <div className='st'>
                <div className='circle'>
                  <p>1</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Enrollment Phase</h2>
                <p>- Application Process: Interested students apply for the program, providing their background, goals, and aspirations.
   - Selection: Review and select mentees based on their commitment, passion, and potential.
</p>
                <div>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">

              <div className='card-body'>
              <div className='st'>
                <div className='circle'>
                  <p>2</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Orientation:</h2>
                <p>Conduct an orientation session to introduce mentors and mentees, explain program goals, expectations, and guidelines.</p>
                <div className='card-actions'>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">

              <div className='card-body'>
              <div className='st'>
                <div className='circle'>
                  <p>3</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Goal Setting:</h2>
                <p> Mentor understands your goals, current preparation level & weaknesses Mentor suggests the perfect plan, timeline & milestones for you</p>
                <div>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">

              <div className='card-body'>
              <div className='st'>
                <div className='circle'>
                  <p>4</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Regular Interaction:</h2>
                <p>Weekly or bi-weekly communication via phone calls, video chats, or in-person meetings, depending on availability and preferences</p>
                <div>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">

              <div className='card-body'>
              <div className='st'>
                <div className='circle'>
                  <p>5</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Customized Career Plan:</h2>
                <p>Mentors assist mentees in crafting a personalized career plan, including skill development, projects, certifications, and networking opportunities.</p>
                <div>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">

              <div className='card-body'>
              <div className='st'>
                <div className='circle'>
                  <p>6</p>
                </div>
                </div>
                <h2 className="card-title my-2 text-2xl">Feedback and Evaluation:</h2>
                <p>Conduct periodic evaluations to assess the effectiveness of the program and gather feedback for improvement.</p>
                <div>
                  <button className="bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;