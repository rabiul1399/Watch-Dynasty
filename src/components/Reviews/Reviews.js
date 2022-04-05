import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews, setReviews] = useReviews([]);
    return (
        <div>
            <h1>All Customer Reviews(6)</h1>
            <div className='reviews'>

                {
                    reviews.map(review => <ReviewCart review={review} key={review.id}
                    ></ReviewCart>)
                }
            </div>
        </div>
    );
};

export default Reviews;