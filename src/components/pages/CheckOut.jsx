import React, { useContext } from 'react';
import banner from '../../assets/images/banner/4.jpg'
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provdier/AuthProvider';

const CheckOut = () => {

    const data = useLoaderData()
    const {user} = useContext (AuthContext)

    const handleOrder = (e) => { 
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const date = form.date.value;

        const allFields = {

            name, email, phone, date
        }

        console.log (allFields)




        fetch (`http://localhost:5000/checkOut`, {

        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allFields)



        })
        .then (res => res.json())
        .then (data => console.log (data))




    }






    return (
        <div className='w-full'>
             <div className="hero    h-[300px]" style={{ backgroundImage: `url(${banner})`, }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-neutral-content bg-black w-full h-full bg-opacity-30">
                        <div className="w-screen  ">
                            <h1 className="mb-5 text-5xl font-bold text-left py-20 ps-5">Check Out</h1>



                            <div className='flex justify-center relative'>


                                <button className="button-primary text-center absolute -bottom-16 ">Home/Check Out</button>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='mx-auto card w-[1140px] shadow-sm bg-base-100 my-20 '>



                    <Form onSubmit={handleOrder} className='card-body space-y-10'>




                        <div className='flex'>





                        <input type="text" name='name' placeholder="name" className="input w-full" />
                        <input type="text" name='email' placeholder="email" defaultValue={user?.email} disabled className="input w-full" />

                        </div>




                        <div className='flex'>





                        <input name='phone' type="text" placeholder="phone no" className="input w-full " />
                        <input name='date' type="date" placeholder="Date" className="input w-full " />

                        </div>

                        <h1 className='font-bold text-3xl'>Price : {data.price}</h1>


                        <button className='button-primary'>

                            Order Confirm
                        </button>






                    </Form>






                </div>
        </div>
    );
};

export default CheckOut;