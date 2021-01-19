import React from 'react'

const CreateTodo = ({ todoInput, setTodoInput, handleTodoSubmit }) => {
  
  const placeholders = [
    'Do the groceries...',
    'Walk the dog...',
    'Wash the dishes...',
    'Water the plants...',
    'Replace lightbulb...'
  ]
  
  return (
    <form onSubmit={handleTodoSubmit}>
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