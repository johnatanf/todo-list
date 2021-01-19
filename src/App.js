import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Notification from './components/Notification'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      task: 'Water the plants',
      dueDate: '2012-11-11',
      priority: 'high priority',
      completed: false
    },
    {
      id: uuid(),
      task: 'Eat the last cookie',
      dueDate: '2021-11-11',
      priority: 'low priority',
      completed: false
    }
  ])
  const [todoInput, setTodoInput] = useState('')
  const [notification, setNotification] = useState('')
  const [notificationTimerId, setNotificationTimerId] = useState('')

  const handleTodoSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat({
      id: uuid(),
      task: todoInput,
      dueDate: '2020',
      priority: 'medium priority',
      completed: false
    })) 
    setTodoInput('')
    flashNotification('successfully created todo!')
  }

  const handleTodoDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
    flashNotification('successfully deleted todo!')
  }

  const handlePriorityChange = (id, priority) => {
    const editedTodo = todos.find(todo => todo.id === id)
    editedTodo.priority = priority
    setTodos(todos.map(todo => todo.id === id ? editedTodo : todo))
  }

  const flashNotification = notification => {
    if(notificationTimerId) {
      clearTimeout(notificationTimerId)
    }
    setNotification(notification)
    const timerId = setTimeout(() => {
      setNotification('')
    }, 5000)
    setNotificationTimerId(timerId)
  }
  
  return (
    <div>
      <Notification 
        notification={notification}
      />
      <CreateTodo 
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleTodoSubmit={handleTodoSubmit}
      />
      <Todos 
        todos={todos} 
        handleTodoDelete={handleTodoDelete}
        handlePriorityChange={handlePriorityChange}
      />
    </div>
  );
}

export default App;
