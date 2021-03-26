import React from 'react'
import styled from 'styled-components'

const StyledTodoSettings = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

const StyledPriorityMenu = styled.select`
  font-family: Open Sans, sans-serif;
  background: transparent;
  border: 0;
  font-size: 16px;
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
  width: 100px;
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

const StyledPriorityButton = styled.button`
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  cursor: pointer;
  flex: 0 0 36px;
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
      <StyledPriorityButton priority={todo.priority}>
        {
          todo.priority === 'high priority'
          ? '!!!'
          : todo.priority === 'medium priority'
          ? '!!'
          : '!'
        }
      </StyledPriorityButton>
      <StyledTime type='time' defaultValue={todo.dueDate} onChange={event => handleDueDateChange(todo.id, event.target.value)}/>
      {/* <StyledPriorityMenu defaultValue={todo.priority} onChange={event => handlePriorityChange(todo.id, event.target.value)}>
          <option value='high priority'>high</option>
          <option value='medium priority'>medium</option>
          <option value='low priority'>low</option>
        </StyledPriorityMenu> */}
    </StyledTodoSettings>
  )
}

export default TodoSettings