import React from 'react';
import image1 from '../../assets/images/banner/1.jpg'
import image2 from '../../assets/images/banner/2.jpg'
import image3 from '../../assets/images/banner/3.jpg'
import image4 from '../../assets/images/banner/4.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div>

<div className="carousel max-w-max overflow-hidden h-[600px] ">
  <div id="slide1" className="carousel-item relative w-full  ">
    <img src=  {image1} className="w-full brightness-50  " />
    <div className="absolute  transform -translate-y-1/2 bottom-0 right-20">
      <a href="#slide4" className="btn btn-circle text-white"> <FaArrowLeft/></a> 
      <a href="#slide2" className="btn btn-circle btn-error text-white"> <FaArrowRight/></a>
    </div>

    <div className="absolute top-52  left-5 mr-10 text-white w-96 h-full  ">
      <div className='space-y-5'>


      <h1 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

      <div className='space-x-5'>

        <button className='button-primary'>Discover More</button>
        <button className='btn btn-outline text-white'>Latest project</button>
      </div>
      </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src= {image2} className="w-full brightness-50" />
    <div className="absolute  transform -translate-y-1/2 bottom-0 right-20">
      <a href="#slide1" className="btn btn-circle text-white"> <FaArrowLeft/></a> 
      <a href="#slide3" className="btn btn-circle btn-error text-white"> <FaArrowRight/></a>
    </div>


    <div className="absolute top-52  left-5 mr-10 text-white w-96 h-full  ">
      <div className='space-y-5'>


      <h1 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

      <div className='space-x-5'>

      <button className='button-primary'>Discover More</button>
        <button className='btn btn-outline text-white'>Latest project</button>
      </div>
      </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src= {image3} className="w-full brightness-50" />
    <div className="absolute  transform -translate-y-1/2 bottom-0 right-20">
      <a href="#slide2" className="btn btn-circle text-white"> <FaArrowLeft/></a> 
      <a href="#slide4" className="btn btn-circle btn-error text-white"> <FaArrowRight/></a>
    </div>


    <div className="absolute top-52  left-5 mr-10 text-white w-96 h-full  ">
      <div className='space-y-5'>


      <h1 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

      <div className='space-x-5'>

      <button className='button-primary'>Discover More</button>
        <button className='btn btn-outline text-white'>Latest project</button>
      </div>
      </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src= {image4} className="w-full brightness-50" />
    <div className="absolute  transform -translate-y-1/2 bottom-0 right-20">
      <a href="#slide3" className="btn btn-circle text-white"> <FaArrowLeft/></a> 
      <a href="#slide1" className="btn btn-circle btn-error text-white"> <FaArrowRight/></a>
    </div>

    <div className="absolute top-52  left-5 mr-10 text-white w-96 h-full  ">
      <div className='space-y-5'>


      <h1 className='text-6xl font-bold'>Affordable  Price For Car  Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

      <div className='space-x-5'>

      <button className='button-primary'>Discover More</button>
        <button className='btn btn-outline text-white'>Latest project</button>
      </div>
      </div>
    </div>
  </div>
</div>


            
        </div>
    );
};

export default Banner;