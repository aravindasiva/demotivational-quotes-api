// api getting data from quotesdb.js file for now.
// Note to self: add all quotes and data to DB of choice
// add id, time added, category to data set

const { ApolloServer } = require("apollo-server-express");

const express = require('express')
const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen({ port: 4001 }, () => {
    console.log("🚀 ~ Server is running on 4001 port")
});