const { gql } = require('apollo-server-express');
const typeDefs = gql
    `
type User {
_id: ID
firstName: String
lastName: String
email: String
password: String
}

type  Review {
_id: ID
title: String
content: String
author: User
recipe: Recipe
createdAt: String
}

type Recipe {
_id: ID
title: String
image: String
sourceName: String
sourceURL: String
user: User
review: Review
}

type Auth {
    token: ID!
    user: User
  }

type Query {
users: [User]
user: User
reviews: [Review]
recipes: [Recipe]
}

type Mutation {
addUser(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!):Auth
addReview(recipeId: ID!, reviewText: String!, rating: Int): Review
}
`;

module.exports = typeDefs;