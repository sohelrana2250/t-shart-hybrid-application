import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirts from '../TShirts/Tshirts';
import './Home.css'

const Home = () => {

    const tshirt = useLoaderData();

    const [cart, setCart] = useState([])

    const HandelAddToCart = (tshirt) => {

        const exist = cart.find((ts) => ts._id === tshirt._id);

        if (exist) {
            alert('This T-Shirt Exist Your Cart');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);

        }


    }

    const HandelRemoveCart = (fs) => {

        const remining = cart.filter((v) => v._id !== fs._id);

        setCart(remining);


    }
    return (
        <div className="Home-Container">


            <div className='T-Shirt-container'>

                {
                    tshirt.map((v, index) => <Tshirts key={index} TShirt={v} HandelAddToCart={HandelAddToCart}></Tshirts>)

                }

            </div>

            <div className='card-container'>
                <Cart cart={cart} HandelRemoveCart={HandelRemoveCart}></Cart>

            </div>

        </div>
    );
};

export default Home;