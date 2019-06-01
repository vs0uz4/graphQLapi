// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import TaskController from '../../controllers/TaskController'

// Resolver para Resgatar uma Task Específica
const taskById = ({ _id }) => {
  const task = TaskController.show(_id)

  return task
}

// Resolver para Resgatar Todas as Tasks
const tasks = () => {
  const tasks = TaskController.index()

  return tasks
}

// Resolver para Criar uma Task
const createTask = ({ title }) => {
  const newTask = TaskController.store(title)

  return newTask
}

// Alterando uma Task Especifica
const updateTask = ({ _id, title }) => {
  const updatedTask = TaskController.update(_id, title)

  return updatedTask
}

// Removendo uma Task Especifica
const deleteTask = ({ _id }) => {
  const deletedTask = TaskController.delete(_id)

  return deletedTask
}

export default {
  taskById,
  tasks,
  createTask,
  updateTask,
  deleteTask
}
