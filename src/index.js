// Importando os Pacotes NPM
import express from 'express'
import dotenv from 'dotenv'

// Instanciando a Aplicação
const app = express()

// Resgatando as Variaveis de Ambiente do Arquivo .env
dotenv.config()

// Rota Inicial da Aplicação (Mensagem de Boas Vindas)
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'YEAH! Seja Bem-Vindo a API GraphQL' })
})

// Iniciando o Sevidor (Aplicação)
app.listen(process.env.PORT || 3000, '0.0.0.0', error => {
  if (error) {
    console.log(`Erro an Inicialização do Servidor\nError Message ${error.message}`)
  } else {
    console.log(`Servidor Express GraphQL Inicializado...\nURL de Acesso: ${process.env.URL}:${process.env.PORT} `)
  }
})
