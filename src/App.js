import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      task: 'Water the plants',
      dueDate: '2012-11-11',
      priority: 'high priority'
    },
    {
      id: uuid(),
      task: 'Eat the last cookie',
      dueDate: '2021-11-11',
      priority: 'low priority'
    }
  ])
  const [todoInput, setTodoInput] = useState('')

  const handleTodoSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat({
      id: uuid(),
      task: todoInput,
      dueDate: '2020',
      priority: 'medium priority'
    })) 
    setTodoInput('')
  }

  const handleTodoDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handlePriorityChange = (id, priority) => {
    const editedTodo = todos.find(todo => todo.id === id)
    editedTodo.priority = priority
    setTodos(todos.map(todo => todo.id === id ? editedTodo : todo))
  }
  
  return (
    <div>
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
