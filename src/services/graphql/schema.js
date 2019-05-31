import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Task {
    id: ID!,
    title: String!
  }

  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    createTask(title: String!): Task!
  }
`)

export default schema
