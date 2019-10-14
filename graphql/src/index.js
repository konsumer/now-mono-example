import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello (name: String = "World"): String
  }
`

const resolvers = {
  Query: {
    hello: (o, { name }) => `Hello ${name}!`
  }
}

const server = new ApolloServer({ typeDefs, resolvers, playground: true })

const app = express()
server.applyMiddleware({ app })

export default app
