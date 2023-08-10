import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Steps = () => {
  return (

    <div className='project-section-bg mt-0 stepsbg'>
      <div>
        <div>
          <div className='pt-7 px-3 pb-7 text-center'>
            <h1 className='text-xl md:text-5xl font-bold' style={{ color: '#fff' }}>Start<span style={{color:'#ee4962'}} > Mentorship </span> today</h1>
            <h1 className='mt-3 text-xl md:text-5xl font-bold'style={{ color: '#fff' }}><span style={{color:'#ee4962'}} >You'll
            </span> never <span style={{color:'#ee4962'}} >look</span> back.</h1>
          </div>
          <div className='mt-4 grid justify-center lg:grid-cols-3 md:grid-cols-2 gap-y-5 md:gap-y-8'>
            <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
              <div className='card-body'>
                <div className='st'>
                <div className='circle'>
                  <p>1</p>
                </div>
                </div>
                <h2 className="card-title my-2">PhotoFolio</h2>
                <p>Build an Android app that allows users to create and showcase their photography portfolio.</p>
                <div>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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
                <h2 className="card-title my-2">iPod</h2>
                <p>Build an Android app for playing and managing music tracks with a sleek design and easy-to-use controls.</p>
                <div className='card-actions'>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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
                <h2 className="card-title my-2">Music Player</h2>
                <p>Create a sleek Android music player inspired by Spotify/Youtube Music with custom design and controls.</p>
                <div>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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
                <h2 className="card-title my-2">BusyBuy</h2>
                <p>Create an Android app for easy online shopping, offering a user-friendly experience to browse and purchase products.</p>
                <div>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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
                <h2 className="card-title my-2">Todo List App</h2>
                <p>Build an Android app to manage tasks and create to-do lists for better productivity.</p>
                <div>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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
                <h2 className="card-title my-2">Ping Pong Game</h2>
                <p>Build An Android game app, reimagining the vintage ping pong using Kotlin.</p>
                <div>
                  <button className="allBtn bg-transparent btnlm">Learn more<FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight> </button>
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