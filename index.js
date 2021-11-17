const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./Schema/type-defs")
const { resolvers } = require("./Schema/resolvers")
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core") 

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`API is running at : ${url} :`)
});
