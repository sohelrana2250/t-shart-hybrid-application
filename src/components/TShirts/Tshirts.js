import React from 'react';
import './TShirts.css'

const Tshirts = (props) => {

    const { name, price, picture } = props.TShirt;
    const { HandelAddToCart } = props;
    return (
        <div>
            <div className='T-Shirts'>
                <img src={picture} alt="" />
                <h4>Name :{name}</h4>
                <h5>Price:{price}</h5>
                <button onClick={() => HandelAddToCart(props.TShirt)}>Add-To-Cart</button>
            </div>

        </div>
    );
};

export default Tshirts;