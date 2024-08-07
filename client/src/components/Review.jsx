// this will contain the components to format each review that will display underneath the recipe on RecipePage// client/src/components/Review.jsx
import React from 'react';
import styled from 'styled-components';

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

const Review = ({ review }) => {
  return (
    <ReviewContainer>
      <ReviewAuthor>{review.author}</ReviewAuthor>
      <ReviewText>{review.text}</ReviewText>
    </ReviewContainer>
  );
};

export default Review;
