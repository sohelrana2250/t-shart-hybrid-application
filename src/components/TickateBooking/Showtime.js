import React, { useState } from 'react';
import Seat from './Seat';

// const seats = [
//     'A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2',
//     'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4',
//     'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2',
//     'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'
// ];

const ticketPrice = 25;







const Showtime = ({ showtime, available_seats }) => {

    const bussd = Array.from({ length: 4 });

    const seata = Array.from({ length: available_seats }, (_, i) => {
        const charCode = String.fromCharCode(65 + i)
        const ssd = bussd.map((v, index) => charCode.split(index + 1) + `${index + 1}`)

        return ssd;


    });

    //console.log(seata);

    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (seat) => {

        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const seatsList = seata.map((seat) => (
        seat.map((seat) => <Seat
            key={seat}
            seat={seat}
            isSelected={selectedSeats.includes(seat)}
            onSelect={handleSeatSelect}
        />)
    ));

    return (
        <div className="flex flex-col">

            <div className='flex justify-evenly'>

                <div style={{ backgroundColor: "#0a192f" }} className="card w-96 text-primary-content mb-3">
                    <div className="card-body">
                        <div className='text-xl'>
                            <h2 className="card-title">Ticket-Details</h2>
                            <p className='flex justify-start'>Date  {new Date().toString().slice(0, 24)}</p>
                            <p className='flex justify-start'>Bus Time : {showtime}</p>
                            <p className='flex justify-start'>Ticket Price :   {ticketPrice}</p>
                            <p className='flex justify-start'>Total Seat :  {selectedSeats.length}</p>
                            <p className='flex justify-start'>Total-Prices: {ticketPrice * selectedSeats.length}</p>
                        </div>
                    </div>
                </div>

                <div>


                    <div className=' flex justify-start '>
                        <button className="text-white btn btn-success border-2 border-gray-400 p-2 rounded-lg mx-4 my-2">BUS-Time : {showtime}</button>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        {seatsList}

                    </div>

                </div>

                <div>
                    <p>Selected Seats</p>
                    <p>{selectedSeats.map((v, index) => <p key={index} className='flex justify-between m-3'> <svg class="w-8 h-6 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>{v}</p>)}</p>
                </div>
            </div>



        </div>
    );
}
export default Showtime;