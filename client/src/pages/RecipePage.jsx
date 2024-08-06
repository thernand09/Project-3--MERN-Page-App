// this page will contain the recipe the user clicked on, as well as the associated reviews for the recipe made by users
// need to import Recipe from components/Recipe.jsx
// need to import Review from components/Review.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../components/Recipe';
import Review from '../components/Review';
import ReviewForm from '../components/ReviewForm';
import '../styles/RecipePage.css';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchRecipeData = async () => {
        const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY; // Ensure to prefix with REACT_APP_
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
  
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const data = await response.json();
            setRecipe(data);
          } else {
            console.error('Failed to fetch recipe');
          }
        } catch (error) {
          console.error('Error fetching recipe:', error);
        }
      };
  
      fetchRecipeData();
  
      // Fetch reviews for the recipe
      const fetchReviewsData = async () => {
        try {
          const response = await fetch(`/api/recipe/${id}/reviews`);
          if (response.ok) {
            const data = await response.json();
            setReviews(data);
          } else {
            console.error('Failed to fetch reviews');
          }
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      };
  
      fetchReviewsData();
    }, [id]);
  
    const addReview = (newReview) => {
      setReviews([...reviews, newReview]);
    };
    
  // add html based on css
    return (
      <div className="RecipePage">
        {recipe && <Recipe recipe={recipe} />}
        <div className="reviews-section">
          <h2>Reviews</h2>
          {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </div>
        <ReviewForm recipeId={id} addReview={addReview} />
      </div>
    );
  };
  
  export default RecipePage;