const { QuoteList } = require("../QuoteData")

const resolvers = {
  Query: {
    quotes() {
      return QuoteList
    },
    randomQuote() {
      return QuoteList[Math.floor(Math.random() * QuoteList.length)]
    }
  }
}

module.exports = {resolvers}