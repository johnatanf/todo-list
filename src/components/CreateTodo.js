import React from 'react'

const CreateTodo = ({ todoInput, setTodoInput }) => {
  return (
    <form>
      <input 
        name='todoInput'
        value={todoInput}
        placeholder='Do the groceries...'
        onChange={event => setTodoInput(event.target.value)}
      />
    </form>
  )
}

export default CreateTodo