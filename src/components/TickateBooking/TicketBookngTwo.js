import React, { useEffect, useState } from 'react';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';



const TicketBookngTwo = () => {



    const [selectedSeats, setSelectedSeats] = useState([]);

    const [busDetails, setBusDetails] = useState([]);
    const [isHovered, setIsHovered] = useState(false);


    console.log(isHovered);
    useEffect(() => {

        fetch('BusBooking.json').then((res) => res.json()).then((data) => {
            setBusDetails(data);
        }).catch((error) => {
            console.log(error?.message)
        })

    }, [])

    //console.log(busDetails);

    const bussd = Array.from({ length: 4 });



    const seata = Array.from({ length: 10 }, (_, i) => {
        const charCode = String.fromCharCode(65 + i)
        const ssd = bussd.map((v, index) => charCode.split(index + 1) + `${index + 1}`)

        return ssd;


    });

    // console.log(seata)

    const handleSelect = (seat) => {


        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    }

    console.log(selectedSeats)


    return (
        <>

            <div className='flex justify-between'>

                <div>
                    {
                        seata.map((v, index) => <div key={index} className='grid grid-cols-4 gap-4 mb-4'>

                            {
                                v.map((v, index) => <div key={index}>

                                    <div onClick={() => handleSelect(v)} onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)} className='border-2 border-gray-400 p-2 rounded-lg mx-2 my-2'>


                                        <MdAirlineSeatReclineExtra className='text-3xl text-emerald-500'></MdAirlineSeatReclineExtra>  {v}</div>
                                </div>)
                            }
                        </div>)
                    }
                </div>

            </div>


        </>
    );
};

export default TicketBookngTwo;