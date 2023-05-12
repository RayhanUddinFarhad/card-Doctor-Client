import React from 'react';
import image1 from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero  py-10  ">
                <div className="hero-content space-x-14 flex-col lg:flex-row">
                    <div className='relative'>

                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute -right-10 -bottom-44 border-4  " />
                    </div>

                    <div className='w-96'>
                        <p className='text-red-500 font-bold text-lg'>About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified  & of experience  in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="button-primary ">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;