// this will contain the components to format each review that will display underneath the recipe on RecipePage// client/src/components/Review.jsx
import React from 'react';
import './Review.css'; // Ensure you have a corresponding CSS file

const Review = ({ review }) => {
  return (
    <div className="review">
      <h3>{review.author}</h3>
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
