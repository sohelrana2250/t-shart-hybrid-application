import React from 'react';
import './Cart.css'

const Cart = (props) => {


    const { HandelRemoveCart } = props;
    let message;

    if (props.cart.length === 0) {
        message = <p>Please Buying at List One Product</p>

    }
    else {
        message = <p>Thaks for Buy A T-Shart</p>
    }
    return (
        <div>
            <h3 className={props.cart.length === 2 ? `orange` : `blue`}>Cart-Item :{props.cart.length}</h3>
            {
                props.cart.map((v, index) => <p key={index}>{v.name} <button onClick={() => HandelRemoveCart(v)}>X</button></p>)
            }
            {message}

        </div>
    );
};

export default Cart;