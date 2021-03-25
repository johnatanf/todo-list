import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  border-bottom: 1px solid black;
`

const StyledInput = styled.input`
  flex: 1;
  font-family: Open Sans, sans-serif;
  font-size: 16px;
  padding: 25px;
  border: 0;
  height: 50px;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid lightgrey;
  }
`

const StyledButton = styled.button`
  flex: 0 0 50px;
  border-radius: 0;
  border: 0;
  font-size: 32px;
  font-family: 'Open Sans', sans-serif;
  background-color: #296d98;
  color: white;
  cursor: pointer;
  transition: background-color .1s;

  &:hover {
    background-color: #1c4966;
  }

  &:active {
    background-color: #296d98;
  }
`

const CreateTodo = ({ todoInput, setTodoInput, handleTodoSubmit }) => {
  
  return (
    <StyledForm onSubmit={handleTodoSubmit}>
      <StyledInput 
        name='todoInput'
        value={todoInput}
        placeholder='Enter task here...'
        onChange={event => setTodoInput(event.target.value)}
        autoComplete='off'
      />
      <StyledButton type="submit">+</StyledButton>
    </StyledForm>
  )
}

export default CreateTodo