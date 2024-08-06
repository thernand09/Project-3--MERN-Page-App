import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
    }
  }
`;


export const GET_REVIEWS = gql`
  query {
    reviews {
      _id
      title
      content
      author {
        firstName
        lastName
      }
      recipe {
        title
      }
      createdAt
    }
  }
`;

export const GET_RECIPES = gql`
  query {
    recipes {
      _id
      title
      image
      sourceName
      sourceURL
      user {
        firstName
        lastName
      }
      review {
        title
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($recipeId: ID!, $reviewText: String!, $rating: Int) {
    addReview(recipeId: $recipeId, reviewText: $reviewText, rating: $rating) {
      _id
      title
      content
      rating
      createdAt
    }
  }
`;