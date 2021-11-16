const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./Schema/type-defs")
const { resolvers } = require("./Schema/resolvers")

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`API is running at : ${url} :`)
});
