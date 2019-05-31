// Importando os Pacotes NodeJs e/ou Funcões da Aplicação
import TaskController from '../../controllers/TaskController'

// Resolver para Resgatar Todas as Tasks
const tasks = () => {
  const tasks = TaskController.index()

  return tasks
}

// Resolver para Criar uma Task
const createTask = ({ title }) => {
  const task = TaskController.store(title)

  return task
}

export default {
  tasks,
  createTask
}
