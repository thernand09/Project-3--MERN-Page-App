// client/src/components/ReviewForm.jsx
import React, { useState } from 'react';
import './ReviewForm.css'; // Ensure you have a corresponding CSS file

const ReviewForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, text });
    setAuthor('');
    setText('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your review"
        required
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
