import store from './store'
import uuid from 'uuid/v1'

const tasks = () => {
  return store.tasks
}

const createTask = ({ title }) => {
  const task = {
    id: uuid(),
    title: title
  }
  store.tasks.push(task)
  return task
}

/*
const users = () => {

}

const createUser = () => {

}
*/

export default {
  tasks,
  createTask
  // users,
  // createUser
}
