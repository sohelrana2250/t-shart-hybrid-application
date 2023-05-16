import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ring }) => {
    return (
        <div>
            <h1>Myself-Component :{house}</h1>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;