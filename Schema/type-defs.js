const { gql } = require("apollo-server");

const typeDefs = gql`
    type Quote {
        id: ID!
        quote: String!
        author: String!
    }

    type Query {
        quotes: [Quote!]!
        randomQuote: Quote!
    }
`;

module.exports = {typeDefs}