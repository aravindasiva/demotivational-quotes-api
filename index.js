const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./Schema/type-defs")
const { resolvers } = require("./Schema/resolvers")

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({url}) => {
  console.log(`API is running at : ${url} :`)
});