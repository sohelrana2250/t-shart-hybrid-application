import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {

    const ring = useContext(RingContext)


    return (
        <div>
            <h4>Cousin-Component</h4>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Cousin;