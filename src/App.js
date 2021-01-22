import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Notification from './components/Notification'
import Card from './components/Card'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('')
  const [notification, setNotification] = useState('')
  const [notificationTimerId, setNotificationTimerId] = useState('')
  const [animateNotification, setAnimateNotification] = useState(false)
  const [sorter, setSorter] = useState('priority')  

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
    if(todoInput) {
      setTodos(todos.concat({
        id: uuid(),
        task: todoInput,
        dueDate: '09:00',
        priority: 'low priority',
        completed: false
      })) 
      setTodoInput('')
      flashNotification('successfully created todo!')
    } else {
      flashNotification('the todo field cannot be blank')
    }
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

  const handleDueDateChange = (id, dueDate) => {
    const editedTodo = todos.find(todo => todo.id === id)
    editedTodo.dueDate = dueDate
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
    setAnimateNotification(true)
    const timerId = setTimeout(() => {
      setNotification('')
      setAnimateNotification(false)
    }, 5000)
    setNotificationTimerId(timerId)
  }

  return (
    <div>
      <Notification 
        notification={notification}
        animateNotification={animateNotification}
      />
      <Card
        todos={todos}
        todoInput={todoInput}
        sorter={sorter}
        setSorter={setSorter}
        setTodoInput={setTodoInput}
        handleTodoSubmit={handleTodoSubmit}
        handleTodoDelete={handleTodoDelete}
        handlePriorityChange={handlePriorityChange}
        handleDueDateChange={handleDueDateChange}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

export default App;
