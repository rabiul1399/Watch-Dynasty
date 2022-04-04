import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import smartwatch from '../../image/smartwatch.jpg';
import ReviewCart from '../ReviewCart/ReviewCart';
import Reviews from '../Reviews/Reviews';
import './Product.css'
const Product = () => {
    const [reviews,setReviews] = useReviews([]);

    const navigate = useNavigate();

    const handleAddToCart =() =>{

    }
    return (
        <div>
            <div className='products-container'>
                <div className='products-summary'>
                    <h1>Watch Dynasty</h1>
                    <p>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.</p>
                    <button className='btn'>Live Demo</button>

                </div>
                <div className='watch'>
                    <img src={smartwatch} alt="" />

                </div>

            </div>
            <div className='customer-reviews'>
                <h1>Customer Reviews</h1>
                <h3>This is Reviews: {reviews.length}</h3>
                <div className='reviews'>
                   {
                       reviews.slice(0,3).map(review=><ReviewCart
                       review={review}
                       key={review.id}
                       handleAddToCart={handleAddToCart}
                       ></ReviewCart>)
                   }

                </div>
                <button onClick={() => navigate('/reviews')} className="btn">See All Reviews</button>
            </div>

        </div>
    );
};

export default Product;