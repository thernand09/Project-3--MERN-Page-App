// client/src/components/Review.jsx
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ReviewContainer = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReviewAuthor = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #343a40;
`;

const ReviewText = styled.p`
  margin: 0;
  color: #6c757d;
`;

const ReviewRating = styled.div`
  font-size: 1rem;
  color: #ffc107; // Gold color for star ratings
  margin-bottom: 0.5rem;
`;

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewRating>
        {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </ReviewRating>
      <ReviewAuthor>{review.author || 'Anonymous'}</ReviewAuthor>
      <ReviewText>{review.text || 'No review text provided.'}</ReviewText>
    </ReviewContainer>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired, // Ensure rating is a number and required
  }).isRequired,
};

export default Review;

