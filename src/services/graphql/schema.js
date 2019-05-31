// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import { buildSchema } from 'graphql'

// Criando o Schema da Entidade Task
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
