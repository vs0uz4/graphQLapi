// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import dotenv from 'dotenv'
import express from 'express'
import exGraphql from 'express-graphql'
import mongoose from './services/mongo'
import schema from './services/graphql/schema'
import resolvers from './services/graphql/resolvers'

// Resgatando as Variaveis de Ambiente do Arquivo .env
dotenv.config()

// Instanciando a Aplicação
const app = express()

// Defininino uma Rota Padrão
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Enjoy The Silence!' })
})

// Injetando a Dependencia do GraphQL
app.use('/graphiql', exGraphql({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

// Conectando ao MongoDB
mongoose()

// Iniciando o Sevidor (Aplicação)
app.listen(process.env.PORT || 3000, '0.0.0.0', error => {
  if (error) {
    console.log(`Erro an Inicialização do Servidor\nError Message ${error.message}`)
  } else {
    console.log(`Servidor Express GraphQL Inicializado...\nURL de Acesso: ${process.env.URL}:${process.env.PORT} `)
  }
})
