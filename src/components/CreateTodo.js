import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  font-family: Open Sans, sans-serif;
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
  
  return (
    <form onSubmit={handleTodoSubmit}>
      <StyledInput 
        name='todoInput'
        value={todoInput}
        placeholder='Enter task here...'
        onChange={event => setTodoInput(event.target.value)}
        autoComplete='off'
      />
    </form>
  )
}

export default CreateTodo