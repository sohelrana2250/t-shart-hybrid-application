import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Sister-Component :{money}</h1>
            <button onClick={() => { setMoney(money + 5) }}>Click-Money</button>
        </div>
    );
};

export default Sister;