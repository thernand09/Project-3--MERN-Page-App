import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutation';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReviewForm = ({ recipeId, onReviewAdded }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addReview({
        variables: { recipeId, reviewText: text, rating: 5 }, // Adjust rating as needed
      });
      onReviewAdded(data.addReview); // Notify parent component
      setAuthor('');
      setText('');
    } catch (err) {
      console.error('Error adding review:', err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your review"
        required
      />
      <Button type="submit">Submit Review</Button>
      {error && <p>Error: {error.message}</p>}
    </Form>
  );
};

export default ReviewForm;
