import React, { useState } from 'react';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';

const Seat = ({ seat, isSelected, onSelect }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleSelect = () => {


        onSelect(seat);



    };





    return (
        <div
            className={`border-2 border-gray-400 p-2 rounded-lg mx-2 my-2 ${isSelected ? 'bg-green-200 text-white' : isHovered ? 'bg-gray-500' : 'bg-gray-800'}`}
            onClick={handleSelect}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MdAirlineSeatReclineExtra className='text-3xl text-emerald-500'></MdAirlineSeatReclineExtra>   {seat}
        </div>
    );
}

export default Seat;