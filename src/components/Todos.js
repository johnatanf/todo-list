import React, { useState, useEffect } from 'react'
import TodoSettings from './TodoSettings'
import styled, { keyframes, css } from 'styled-components'
import { Transition } from 'react-transition-group'

const todoColourFade = keyframes`
  from {
    background-color: white;
  }

  to {
    background-color: #fafafa;
  }
`

const trashColourFade = keyframes`
  from {
    color: black;
  }

  to {
    color: red;
  }
`

const StyledList = styled.li`
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Concert One;
  font-size: 16px;
  padding: 20px;
  border-top: 1px solid black;
  background: white;
  opacity: ${props => props.todo.completed ? '0.7' : '1'}; 
  
  &:hover {
    animation: ${props => !props.todo.completed ? css`${todoColourFade} 0.1s forwards` : ''};
  }
`

const StyledListAnimation = styled(StyledList)`
  transition: 0.5s;
  opacity: ${({ state }) => state === 'entering' ? '0.1' : state === 'entered' ? '1' : '0' };
`

const StyledTask = styled.span`
  width: 50%;
  word-wrap: break-word;
  text-decoration: ${props => props.todo.completed ? 'line-through' : ''}
`

const StyledDelete = styled.i`
  &:hover {
    animation: ${trashColourFade} 0.1s forwards;
  }
`

const Todo = (props) => {
  
  const [animateTodo, setAnimateTodo] = useState(false)

  useEffect(() => {
    if(!animateTodo) {
      setAnimateTodo(true)
    }
  }, [animateTodo])
  
  return (
    <Transition in={animateTodo} timeout={0}>
      {(state) => (
        <StyledListAnimation todo={props.todo} state={state}>
          <input 
            type='checkbox' 
            onClick={() => props.toggleCompleted(props.todo.id)}
            defaultChecked={ props.todo.completed ? true : false } 
          />
          <StyledTask todo={props.todo}>{props.todo.task}</StyledTask>
          <TodoSettings todo={props.todo} handlePriorityChange={props.handlePriorityChange} handleDueDateChange={props.handleDueDateChange} />
          <StyledDelete className="fas fa-trash-alt" onClick={() => props.handleTodoDelete(props.todo.id)}>
          </StyledDelete>
        </StyledListAnimation>
      )}
    </Transition>
  )
}

const Todos = (props) => {

  const sortByPriority = (a, b) => {
    const categories = ['high priority', 'medium priority', 'low priority']
    const indexA = categories.indexOf(a.priority)
    const indexB = categories.indexOf(b.priority)
    if (indexA > indexB) {
      return 1
    } else if (indexA < indexB) {
      return -1 
    } else {
      return 0
    }
  }

  const sortByDueDate = (a, b) => {
    if (a.dueDate > b.dueDate) {
      return 1 
    } else if (a.dueDate < b.dueDate) {
      return -1
    } else {
      return 0
    }
  }

  const sortByCompleted = (a, b) => {
    const categories = [true, false]
    const indexA = categories.indexOf(a.completed)
    const indexB = categories.indexOf(b.completed)
    if (indexA > indexB) {
      return -1
    } else if (indexA < indexB) {
      return 1
    } else {
      return 0
    }
  }
  
  return (
    <ul>
      {props.todos
        .sort(props.sorter === 'priority' ? sortByPriority : props.sorter === 'due date' ? sortByDueDate : undefined)
        .sort(sortByCompleted)
        .map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo}
            handleTodoDelete={props.handleTodoDelete}
            handlePriorityChange={props.handlePriorityChange}
            handleDueDateChange={props.handleDueDateChange}
            toggleCompleted={props.toggleCompleted}
          />
        )
      )}
    </ul>
  )
}

export default Todos;
