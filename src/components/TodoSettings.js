import React from 'react'
import styled from 'styled-components'
import PriorityMenu from './PriorityMenu';

const StyledTodoSettings = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`

const StyledTime = styled.input`
  background: transparent;  
  font-family: Open Sans, sans-serif;
  font-size: 16px; 
  width: 100px;
  border: 0;
  position: relative;

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

const StyledPriorityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20px;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  cursor: pointer;
  
  color: ${({ priority }) => 
    priority === 'high priority'
    ? '#ff4d4d'
    : priority === 'medium priority'
    ? '#ffb624'
    : priority === 'low priority'
    ? '#32a6a8'
    : ''
  };

  .styled-menu-container {
    visibility: hidden;
  }

  &:hover .styled-menu-container {
    visibility: visible;
  }
`

const TodoSettings = ({ todo, handlePriorityChange, handleDueDateChange }) => {
  
  return (
    <StyledTodoSettings>
      <StyledPriorityButton priority={todo.priority}>
        <PriorityMenu todo={todo} handlePriorityChange={handlePriorityChange} />
          {
            todo.priority === 'high priority'
            ? '!!!'
            : todo.priority === 'medium priority'
            ? '!!'
            : '!'
          }
      </StyledPriorityButton>
      <StyledTime type='time' defaultValue={todo.dueDate} onChange={event => handleDueDateChange(todo.id, event.target.value)}/>
    </StyledTodoSettings>
  )
}

export default TodoSettings