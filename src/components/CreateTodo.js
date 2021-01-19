import React from 'react'

const CreateTodo = ({ todoInput, setTodoInput, todos, setTodos }) => {
  
  const placeholders = [
    'Do the groceries...',
    'Walk the dog...',
    'Wash the dishes...',
    'Water the plants...',
    'Replace lightbulb...'
  ]

  const handleSubmit = event => {
    event.preventDefault()
    setTodos(todos.concat({task: todoInput})) 
    setTodoInput('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name='todoInput'
        value={todoInput}
        placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
        onChange={event => setTodoInput(event.target.value)}
      />
    </form>
  )
}

export default CreateTodo