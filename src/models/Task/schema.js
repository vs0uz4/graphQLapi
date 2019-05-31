// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import mongoose from 'mongoose'

// Criando o Schema da Entidade Task
const Task = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

export default Task
