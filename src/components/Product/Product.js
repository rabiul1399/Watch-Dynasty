import React from 'react';
import  smartwatch from '../../image/smartwatch.jpg';
import './Product.css'
const Product = () => {
    return (
        <div className='products-container'>
            <div className='products-summary'>
                <h2>Time Buzz</h2>
                <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                <button className='btn'>Live Demo</button>

            </div>
            <div className='watch'>
                <img src={smartwatch} alt="" />

            </div>
            
        </div>
    );
};

export default Product;