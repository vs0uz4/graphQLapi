// Importando o Model Task
import Task from '../models/Task'

// Criando a Class TaskController
class TaskController {
  // Resgatar Todas as Tasks
  async index () {
    const tasks = await Task.find()

    return tasks
  }

  // Criar uma Task
  async store (title) {
    const task = await Task.create({ title })

    return task
  }
}

export default new TaskController()
