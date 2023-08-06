import React from 'react';
import './style.css'; // Make sure to import your CSS file

export default function Overview() {
  return (
    <div className='container'>
      <div className='left'>
        <div className='content'>
          <h1>Not just any mentor.<br/>
            You get a
            Preplaced Mentor.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quas. Fuga laborum exercitationem animi possimus?</p>
          <button>Select Your Mentor</button>
        </div>
      </div>
      <div className='right'>
        <div className='row'>
          <div className='stat'>
            <div className='circle'>
            <i className="fa fa-book-open"></i>
            </div>
            <div>
              <h1>3500+</h1>
              <p>Mentorship sessions conducted</p>
            </div>
          </div>
          <div className='stat'>
            <div className='circle'>
          <i className="fa fa-user"></i>
          </div>
            <div>
              <h1>2000+</h1>
              <p>Mentorship sessions conducted</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='stat'>
            <div className='circle'>
          <i className="fa fa-medal"></i>          
          </div>
            <div>
              <h1>4.9/5</h1>
              <p>Mentorship sessions conducted</p>
            </div>
          </div>
          <div className='stat'>
            <div className='circle'>
          <i className="fa fa-lightbulb"></i>
          </div>
            <div>
              <h1>80%+</h1>
              <p>Mentorship sessions conducted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
