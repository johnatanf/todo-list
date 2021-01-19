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
      priority: 'important'
    },
    {
      id: uuid(),
      task: 'Eat the last cookie',
      dueDate: '2021-11-11',
      priority: 'not important'
    }
  ])
  const [todoInput, setTodoInput] = useState('')

  const handleTodoSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat({
      id: uuid(),
      task: todoInput,
      dueDate: '2020',
      priority: 'important'
    })) 
    setTodoInput('')
  }

  const handleTodoDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
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
      />
    </div>
  );
}

export default App;
