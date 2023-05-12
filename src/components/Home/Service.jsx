import React, { useEffect, useState } from 'react';
import ServiceList from './ServiceList';

const Service = () => {



    const [service, setService] = useState ([])

    useEffect (() => {




        fetch ('http://localhost:5000/services')
        .then (response => response.json())
        .then (data => setService(data))
     }, [])

     console.log (service)








    return (
        <div className='my-32 space-y-10'>
            <div className='text-center space-y-5'>


                <p className='text-red-500 font-bold'>Service</p>
                <h1 className='text-6xl font-bold'>Our Service Area</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Esse dicta ducimus iste autem inventore,  corrupti obcaecati culpa aperiam laborum animi?</p>
            </div>


            <div className='grid lg:grid-cols-3 gap-5'>

                {


service && service.map (service => <ServiceList data={service}></ServiceList>)
                }










                
            </div>
        </div>
    );
};

export default Service;