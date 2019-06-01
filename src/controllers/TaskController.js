// Importando o Model Task
import Task from '../models/Task'

// Criando a Class TaskController
class TaskController {
  // Resgatar Todas as Tasks
  async index () {
    const tasks = await Task.find()

    return tasks
  }

  // Regatr uma Task Específica
  async show (id) {
    const task = await Task.findById(id)

    return task
  }

  // Criar uma Task
  async store (title) {
    const newTask = await Task.create({ title })

    return newTask
  }

  // Criar uma Task
  async update (id, title) {
    const task = await Task.findByIdAndUpdate(id, { title })
      .then(async data => {
        const updatedTask = await Task.findById(data.id)

        return updatedTask
      })

    return task
  }

  // Remover uma Task
  async delete (id) {
    const deletedTask = await Task.findByIdAndRemove(id)

    return deletedTask
  }
}

export default new TaskController()
