import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../assets/images/banner/4.jpg'

const ServiceDetails = () => {



    const data = useLoaderData()





    return (
        <div>


            <div>



                <div className="hero    h-[300px]" style={{ backgroundImage: `url(${banner})`, }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-neutral-content bg-black w-full h-full bg-opacity-30">
                        <div className="w-screen  ">
                            <h1 className="mb-5 text-5xl font-bold text-left py-20 ps-5">Service Details</h1>



                            <div className='flex justify-center relative'>


                                <button className="button-primary text-center absolute -bottom-16 ">Home/Service Details</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className='grid lg:grid-cols-4 my-20 px-14'>

                <div className='col-span-3 space-y-12'>

                    <img className='w-96 ' src={data?.img} alt="" />

                    <h1 className='text-5xl font-bold'>{data?.title}</h1>
                    <p>{data.description}</p>


                    <div className='grid grid-cols-2 gap-5'>



                        {
                            data && data.facility.map(fac => {


                                return (

                                    <div className='space-y-2 border-t border-red-500 p-2 rounded-t-lg'>

                                        <h1 className='text-xl font-bold'>{fac.name}</h1>
                                        <p>{fac.details}</p>




                                    </div>






                                )
                            })
                        }
                    </div>


                    <p>{data.description}</p>











                </div>

                <div>

                    <h1 className='text-3xl font-bold'>Price : ${data.price}</h1>
                    <Link to= {`/checkOut/${data._id}`}>                    <button className='button-primary'>Proceed Checkout</button>
                    </Link>


                </div>






            </div>







            I am {data?.title}
        </div>
    );
};

export default ServiceDetails;