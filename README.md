# 😒 Demotivational Quotes API

<br />
<div align="center">
 <h2 align="center">Demotivational Quotes API </h2>
  <a href="https://github.com/aravindasiva/demotivational-quotes-api">
    <img src="confession.gif" alt="I don't know what I am doing" width="370" height="210">
  </a>

  <h3 align="center">Demotivational Quotes API</h3>

  <p align="center">
    Because motivation is too over rated 
    <br />
    <br />
    <br />
    <a href="https://github.com/aravindasiva/demotivational-quotes-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/aravindasiva/demotivational-quotes-api/issues">Request Feature</a>
  </p>
</div>


#### A GraphQL API for get random demotivational quotes 

Retrieve a random demotivational quote or all demotivational quotes, This is a simple graphQL API.
Contributions or feature ideas are welcome. You can see the Live version Playground here:

[demotivation-quotes-api.herokuapp.com](https://demotivation-quotes-api.herokuapp.com/graphql) 🤏

## NextJS app using this API 

[negative-space.netlify.app](https://negative-space.netlify.app/) 🤏
<br/>
[Repo](https://github.com/aravindasiva/demotivational-quotes-web)

## How to Use

#### Queries

* quotes (retrives all the quotes)
* randomQuote (retrives a random quote from the QuotesData)

#### Example with data

```graphql
query {
  quotes {
    id
    quote
    author
  }
}
```

```graphql
query {
  randomQuote {
    id
    quote
    author
  }
}
```
## Example Response

```graphql
{
  "data": {
    "randomQuote": {
      "id": "6",
      "quote": "Those who doubt your ability probably have a valid reason.",
      "author": "unknown"
    }
  }
}
```

## How to Install

For running this project locally, you must fork this project first. Then,

```sh
yarn
yarn start # Using nodemon for auto-reloading
```
The server starts at http://localhost:4000/


## About

Aravinda Siva – [LinkedIn](https://www.linkedin.com/in/aravindasiva/) – [aravindcva@hotmail.com](mailto:aravindcva@hotmail.com)


[https://github.com/aravindasiva](https://github.com/aravindasiva)