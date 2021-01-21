import React from 'react'
import TodoSettings from './TodoSettings'
import styled, { keyframes, css } from 'styled-components'

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

const List = styled.li`
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
  opacity: ${props => props.todo.completed ? '70%' : '100%'};
  
  &:hover {
    animation: ${props => !props.todo.completed ? css`${todoColourFade} 0.1s forwards` : ''}
  }
`

const Task = styled.span`
  width: 50%;
  word-wrap: break-word;
  text-decoration: ${props => props.todo.completed ? 'line-through' : ''}
`

const Delete = styled.i`
  &:hover {
    animation: ${trashColourFade} 0.1s forwards;
  }
`

const Todo = ({ todo, handleTodoDelete, handlePriorityChange, handleDueDateChange, toggleCompleted }) => {
  return (
    <List todo={todo}>
      <input 
        type='checkbox' 
        onClick={() => toggleCompleted(todo.id)}
        defaultChecked={ todo.completed ? true : false }
      />
      <Task todo={todo}>{todo.task}</Task>
      <TodoSettings todo={todo} handlePriorityChange={handlePriorityChange} handleDueDateChange={handleDueDateChange} />
      <Delete className="fas fa-trash-alt" onClick={() => handleTodoDelete(todo.id)}>
      </Delete>
    </List>
  )
}

const Todos = ({ todos, sorter, handleTodoDelete, handlePriorityChange, handleDueDateChange, toggleCompleted }) => {

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
      {todos
        .sort(sorter === 'priority' ? sortByPriority : sorter === 'due date' ? sortByDueDate : undefined)
        .sort(sortByCompleted)
        .map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo}
            handleTodoDelete={handleTodoDelete}
            handlePriorityChange={handlePriorityChange}
            handleDueDateChange={handleDueDateChange}
            toggleCompleted={toggleCompleted}
          />
        )
      )}
    </ul>
  )
}

export default Todos;
