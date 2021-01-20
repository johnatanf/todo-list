import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Notification from './components/Notification'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid black;
  background: white;
  margin-top: 50px;
  width: 45%;
  min-width: 320px;
  max-width: 350px;
`

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [notification, setNotification] = useState('')
  const [notificationTimerId, setNotificationTimerId] = useState('')

  useEffect(() => { // effect to retrieve todos if they already exist in local storage 
    const todos = localStorage.getItem('todos')
    if(todos && JSON.parse(todos) instanceof Array) {
      setTodos(JSON.parse(todos))
    } else {
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }, [])

  useEffect(() => { // effect to save todos to storage whenever a change is made 
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

  const toggleCompleted = id => {
    const editedTodo = todos.find(todo => todo.id === id)
    editedTodo.completed = !editedTodo.completed
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
      <Card>
        <CreateTodo 
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          handleTodoSubmit={handleTodoSubmit}
        />
        <Todos 
          todos={todos} 
          handleTodoDelete={handleTodoDelete}
          handlePriorityChange={handlePriorityChange}
          toggleCompleted={toggleCompleted}
        />
      </Card>
    </div>
  );
}

export default App;
