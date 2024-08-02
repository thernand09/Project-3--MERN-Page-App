const typeDefs =
`
type User {
_id: ID
}

type  Review {
_id: ID
}

type Recipe {
_id: ID
}

type Query {
users: [User]
reviews: [Review]
recipes: [Recipe]
}

type Mutation {

}
`;

module.exports = typeDefs;