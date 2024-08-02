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

type Query {
users: [User]
user: User
favoriteRecipes: Recipe
reviews: [Review]
recipes: [Recipe]
}
`;

module.exports = typeDefs;