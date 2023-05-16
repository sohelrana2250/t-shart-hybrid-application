import React, { useEffect, useState } from 'react';
import Showtime from './Showtime';




// https://github.com/acatzk/realtime-bus-tracking-system
const Common = () => {
    // const showtimes = ['8:00pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm'];
    const [busDetails, setBusDetails] = useState([])
    /* the json file information added this position 
    we have to use time ,BusName ,Bus Number and etc also we have to store user information*/


    useEffect(() => {

        fetch('BusBooking.json').then((res) => res.json()).then((data) => {
            setBusDetails(data);
        }).catch((error) => {
            console.log(error?.message)
        })

    }, [])

    console.log(busDetails)

    const showtimesList = busDetails.map((showtime, index) => <>

        <Showtime key={index} available_seats={showtime.available_seats} showtime={showtime.time} />
    </>);
    return (
        <>
            <div className=" py-8">
                <h1 className="text-2xl font-bold mb-4">Ticket Booking System</h1>



                {showtimesList}

            </div>

        </>
    );
};

export default Common;