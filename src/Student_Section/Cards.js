import React from 'react';
import './style.css';
import './avatar.jpg';

export default function cards() {
  return (
    <div className='all'>
      <div className="card">
	<div className="card-borders">
		<div className="border-top"></div>
		<div className="border-right"></div>
		<div className="border-bottom"></div>
		<div className="border-left"></div>
	</div>
	<div className="card-content">
		<img src={require('./avatar.jpg')} className="avatar" alt=''/>
		<p className="username">Mentor's Name</p>
		<p className="designation">Web & Graphic Designer</p>
		<p className="bio">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ratione quibusdam officia animi quidem harum repudiandae quisquam natus et.</p>
		
		<div className="social-icons">
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-instagram"></i>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-youtube"></i>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-twitter"></i>
			</a>
		</div>
	</div>
</div>
    </div>
  )
}
