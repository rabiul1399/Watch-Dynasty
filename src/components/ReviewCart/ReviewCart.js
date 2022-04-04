import React from 'react';
import './ReviewCart.css';
const ReviewCart = (props) => {
    const {name,description,ratings} =props.review
 
    return (
        <div className='review-cart'>

            <h3>{name}</h3>
            <h4>Rating: {ratings}</h4>
            <p>{description}</p>

            
        </div>
    );
};

export default ReviewCart;