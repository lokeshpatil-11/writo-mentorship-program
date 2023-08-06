import React from 'react'
import './style.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export default function Steps() {
  return (
    <div>
        <h1 className='heading'>Start Mentorship today. You'll never look back.</h1>
        <Carousel className="step-container" responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={2500}  infinite={true} >
        <div className='box'>
            <h3>Card</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi quia, omnis praesentium, qui vero incidunt aspernatur 
            minus numquam iusto pariatur voluptatibus fugit beatae expedita sed?</p>
            <a href="/"><button className='btn'>Know More</button></a>
            <span className='count'>Step-1</span>
        </div>

        <div className='box b2'>
            <h3>Card</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi quia, omnis praesentium, qui vero incidunt aspernatur 
            minus numquam iusto pariatur voluptatibus fugit beatae expedita sed?</p>
            <a href="/"><button className='btn'>Know More</button></a>
            <span className='count'>Step-2</span>
        </div>

        <div className='box b3'>
            <h3>Card</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi quia, omnis praesentium, qui vero incidunt aspernatur 
            minus numquam iusto pariatur voluptatibus fugit beatae expedita sed?</p>
            <a href="/"><button className='btn'>Know More</button></a>
            <span className='count'>Step-3</span>
        </div>

        <div className='box b4'>
            <h3>Card</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi quia, omnis praesentium, qui vero incidunt aspernatur 
            minus numquam iusto pariatur voluptatibus fugit beatae expedita sed?</p>
            <a href="/"><button className='btn'>Know More</button></a>
            <span className='count'>Step-4</span>
        </div>
</Carousel>
    </div>
  )
}
