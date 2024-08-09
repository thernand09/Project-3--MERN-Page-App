import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
    token
    user {
        _id
        }
    }
}
`;

export const ADD_USER = gql`
    mutation addUser(
    $firstName: String!
    $lastName: Sting!
    $username: String!
    $email: String!
    $password: String!
    ) {
    addUser(
    username: $username
    email: $email
    password: $password
    ) { 
      token
      user {
      _id
      }
    }
  }
`;

export const ADD_REVIEW = gql`
    mutation addReview(
    $recipeId: ID!
    $reviewText: String!
    $rating: Int
    ) {
    addReview(
    recipeId: $recipeId
    reviewText: $reviewText
    rating: $rating
    )
}
`;