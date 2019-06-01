// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import { buildSchema } from 'graphql'
import './types/GraphQLTimestamp'

// Criando o Schema da Entidade Task
const schema = buildSchema(`
  scalar Timestamp

  type Task {
    _id: ID!,
    title: String!,
    created_at: Timestamp!,
    updated_at: Timestamp!
  }

  type Query {
    taskById(_id: String!): Task,
    tasks: [Task]
  }

  type Mutation {
    createTask(title: String!): Task,
    updateTask(_id: String!, title: String!): Task,
    deleteTask(_id: String!): Task
  }
`)

export default schema
