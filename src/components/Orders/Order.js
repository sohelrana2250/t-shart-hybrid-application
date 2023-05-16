import React, { useEffect, useState } from 'react';

const Order = () => {


    const [isOnline, setIsOnline] = useState(navigator.onLine);


    useEffect(() => {
        // Update network status
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Listen to the online status
        window.addEventListener('online', handleStatusChange);

        // Listen to the offline status
        window.addEventListener('offline', handleStatusChange);

        // Specify how to clean up after this effect for performance improvment
        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);
    return (
        <div>
            <h1>Order Section</h1>

            <div className='flex justify-center'>
                <h3 className='text-3xl'>Welcome to KindaCode.com</h3>

                <h4 className='text-3xl'>Turn on/off your Wi-Fi to see what happens</h4>
                {isOnline ? (
                    <h1 className='text-5xl text-blue-600'>You Are Online</h1>
                ) : (
                    <h1 className='text-5xl text-red-600'>You Are Offline</h1>
                )}
            </div>
        </div>
    );
};

export default Order;