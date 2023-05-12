import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceList = ({data}) => {
    return (
        <div>



<div className="card w-96 bg-base-100  h-full">
  <figure><img src= {data.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.title}
    </h2>
    <p className='text-red-500 font-bold'>Price :  ${data.price}</p>
    <div className="card-actions justify-end text-red-500">



       <Link to = {`/serviceDetails/${data._id}`}> <FaArrowRight/></Link>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ServiceList;