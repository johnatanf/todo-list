import React from 'react'
import styled from 'styled-components'

const StyledTodoSettings = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledPriorityMenu = styled.select`
  font-family: Open Sans, sans-serif;
  background: transparent;
  border: 0;
  font-size: 16px;
  margin-bottom: 6px;
  appearance: none;
  min-width: 75px;

  &:focus {
    outline: none;
  }
`

const StyledTime = styled.input`
  background: transparent;  
  font-family: Open Sans, sans-serif;
  font-size: 16px; 
  border: 0;
  position: relative;
  margin-top: 5px;

  &::-webkit-calendar-picker-indicator {
    font-size: 18px;
    position: absolute;
    left: 35px;
  }

  &::-webkit-calendar-picker-indicator:focus {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`

const Exclamation = styled.i`
  margin-right: 5px;
  color: ${({ priority }) => 
    priority === 'high priority'
    ? '#ff4d4d'
    : priority === 'medium priority'
    ? '#ffb624'
    : priority === 'low priority'
    ? '#32a6a8'
    : ''
  };
`

const TodoSettings = ({ todo, handlePriorityChange, handleDueDateChange }) => {
  return (
    <StyledTodoSettings>
      <div>
        <Exclamation priority={todo.priority} className="fas fa-exclamation"></Exclamation>
        <StyledPriorityMenu defaultValue={todo.priority} onChange={event => handlePriorityChange(todo.id, event.target.value)}>
          <option value='high priority'>high</option>
          <option value='medium priority'>medium</option>
          <option value='low priority'>low</option>
        </StyledPriorityMenu>
      </div>
      <StyledTime type='time' defaultValue={todo.dueDate} onChange={event => handleDueDateChange(todo.id, event.target.value)}/>
    </StyledTodoSettings>
  )
}

export default TodoSettings