import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_REVIEWS } from '../utils/queries';
import { ADD_REVIEW } from '../utils/mutation';
import Recipe from '../components/Recipe';
import Review from '../components/Review';
import ReviewForm from '../components/ReviewForm';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  
  // Fetch reviews using the GET_REVIEWS query
  const { loading, error, data } = useQuery(GET_REVIEWS, {
    variables: { recipeId: id },
  });

  // Mutation to add a new review
  const [addReviewMutation] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      cache.modify({
        fields: {
          reviews(existingReviews = []) {
            const newReviewRef = cache.writeFragment({
              data: addReview,
              fragment: gql`
                fragment NewReview on Review {
                  _id
                  reviewText
                  rating
                  createdAt
                }
              `
            });
            return [...existingReviews, newReviewRef];
          }
        }
      });
    }
  });

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
  }, [id]);

  const handleAddReview = async (reviewText, rating) => {
    try {
      const { data } = await addReviewMutation({
        variables: { recipeId: id, reviewText, rating },
      });
      setReviews([...reviews, data.addReview]);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching reviews</p>;

  const reviews = data?.reviews || [];

  return (
    <div className="RecipePage">
      {recipe && <Recipe recipe={recipe} />}
      <div className="reviews-section">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
      <ReviewForm recipeId={id} addReview={handleAddReview} />
    </div>
  );
};

export default RecipePage;
