import React, { useState } from 'react';

const Product = () => {
    const [showAll, setShowAll] = useState(false);

    const products = [
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 3 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 3 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 4 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 4 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 3 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 5 },
        { image: 'https://static.theprint.in/wp-content/uploads/2022/12/messi.jpg?compress=true&quality=80&w=376&dpr=2.6', discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", rating: 4 },
    ];

    const visibleProducts = showAll ? products : products.slice(0, 6);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <>
            <div className="container mx-auto m-3">
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    {visibleProducts.map((product, index) => (

                        <div key={index} class="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="..">
                                <img class="rounded-t-lg" src={product.image} alt="" />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="..">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </a>
                                <p>{product.discription}</p>
                                <div class="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a href="..." class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                {!showAll && (
                    <div className="mt-4 text-center">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={handleShowAll}
                        >
                            More
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Product;