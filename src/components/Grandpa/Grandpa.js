import React, { useState } from 'react';
import Aunti from '../Aunti/Aunti';
import Father from '../Father/Father';
import Uncel from '../Uncel/Uncel';
import './Grandpa.css'

export const RingContext = React.createContext('Vi-King-Ring')
export const MoneyContext = React.createContext('555');

const Grandpa = () => {


    const ring = 'house of Dragion'

    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(1080);
    //https://reactjs.org/docs/context.html#reactcreatecontext

    return (

        <RingContext.Provider value={[house, setHouse]}>

            <MoneyContext.Provider value={[money, setMoney]}>

                <div className='grandpa'>
                    <h1>Grandpa</h1>
                    <section className='flex'>
                        <Father house={house} ring={ring}></Father>
                        <Uncel house={house}></Uncel>
                        <Aunti house={house}></Aunti>
                    </section>
                </div>
            </MoneyContext.Provider>


        </RingContext.Provider>

    );
};

export default Grandpa;