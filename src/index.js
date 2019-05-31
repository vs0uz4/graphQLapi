// Importando os Pacotes NPM
import dotenv from 'dotenv'
import express from 'express'
import exGraphql from 'express-graphql'
import schema from './services/graphql/schema'
import resolvers from './services/graphql/resolvers'

// Resgatando as Variaveis de Ambiente do Arquivo .env
dotenv.config()

// Instanciando a Aplicação
const app = express()

// Injetando a Dependencia do GraphQL
app.use('/', exGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

// Iniciando o Sevidor (Aplicação)
app.listen(process.env.PORT || 3000, '0.0.0.0', error => {
  if (error) {
    console.log(`Erro an Inicialização do Servidor\nError Message ${error.message}`)
  } else {
    console.log(`Servidor Express GraphQL Inicializado...\nURL de Acesso: ${process.env.URL}:${process.env.PORT} `)
  }
})
