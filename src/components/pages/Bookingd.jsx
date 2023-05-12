import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provdier/AuthProvider';

const Bookingd = () => {


    const {user} = useContext(AuthContext)
    const [booking, setBooking] = useState ([])



    const url = `http://localhost:5000/checkOut?email=${user.email}`

    fetch (url)
    .then (response => response.json())
    .then (data => setBooking (data))




    return (
        <div>


            I am {booking.length}
            
        </div>
    );
};

export default Bookingd;