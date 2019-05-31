// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import mongoose from 'mongoose'
import Schema from './schema'

// Criando o Model da Entidade Task
const Task = mongoose.model('Task', Schema)

export default Task
