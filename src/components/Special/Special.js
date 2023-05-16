import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {

    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Spical Component</h4>
            <p><small>{house}</small></p>
            <button onClick={() => setHouse(house + 1)}>On-Click</button>
        </div>
    );
};

export default Special;