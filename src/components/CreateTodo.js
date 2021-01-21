import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  font-family: Concert One;
  font-size: 16px;
  padding: 25px;
  border: 0;
  border-bottom: 1px solid black;
  height: 50px;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid lightgrey;
  }
`

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
      <StyledInput 
        name='todoInput'
        value={todoInput}
        placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
        onChange={event => setTodoInput(event.target.value)}
        autoComplete='off'
      />
    </form>
  )
}

export default CreateTodo