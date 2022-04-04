import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import smartwatch from '../../image/smartwatch.jpg';
import './Product.css'
const Product = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='products-container'>
                <div className='products-summary'>
                    <h1>Time Buzz</h1>
                    <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                    <button className='btn'>Live Demo</button>

                </div>
                <div className='watch'>
                    <img src={smartwatch} alt="" />

                </div>

            </div>
            <div className='customer-reviews'>
                <h1>Customer Reviews</h1>

                <button onClick={() => navigate('/reviews')} className="btn">Proceed Checkout</button>


            </div>

        </div>
    );
};

export default Product;