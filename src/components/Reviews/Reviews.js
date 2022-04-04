import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews,setReviews] = useReviews([]);
    return (
        <div className='reviews'>
           
            {
                reviews.map(review=><ReviewCart review={review}></ReviewCart>)
            }
        </div>
    );
};

export default Reviews;