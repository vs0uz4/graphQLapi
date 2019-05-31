// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Resgatando as Variaveis de Ambiente do Arquivo .env
dotenv.config()

// Conectando com o MongoDB
const connection = () => {
  // Definindo as constantes de conexão com o MongoDB
  let mongooseURI = ''
  const mongooseOptions = { useNewUrlParser: true }
  if (process.env.NODE_ENV === 'development') {
    mongooseURI = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  } else {
    mongooseURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  }

  // Efetuando a conexão
  mongoose.connect(mongooseURI, mongooseOptions)
    .then(() => console.log('Conexão com o MongoDB Realizada com Sucesso!'))
    .catch((err) => console.log('Não foi Possível Conectar ao Servidor MongoDB.\nPor Favor Inicie o Servidor.\nError:', err))

  return mongoose
}

export default connection
