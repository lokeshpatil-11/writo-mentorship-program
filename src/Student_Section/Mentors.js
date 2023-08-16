import React from 'react';
import Cards from './Cards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        items: 1,
    }
};
export default function Mentors() {
    return (
        <div>
            <div className='pt-7 px-8 pb-3 xs:text-center px-0'>
            <h1 className='text-xl xs:text-3xl md:text-5xl font-bold'>Every<span style={{color:'#ee4962'}} > Experience </span> Every </h1>
            <h1 className='mt-3 text-xl xs:text-3xl md:text-5xl font-bold '> <span style={{color:'#ee4962'}} >Domain 
            </span> Covered</h1>
          </div>
            <Carousel responsive={responsive} showDots={true} arrows={false} autoPlay={true} autoPlaySpeed={2500} infinite={true} className='craw'
            >
                <Cards name="Mentor 1" company="Company Name 1" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                <Cards name="Mentor 2" company="Company Name 2" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                <Cards name="Mentor 3" company="Company Name 3" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                <Cards name="Mentor 4" company="Company Name 4" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                <Cards name="Mentor 5" company="Company Name 5" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                <Cards name="Mentor 6" company="Company Name 6" designaton="Content Writer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
            </Carousel>
        </div>
    )
}
