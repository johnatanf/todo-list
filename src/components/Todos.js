import React from 'react'
import TodoSettings from './TodoSettings'
import styled, { keyframes } from 'styled-components'

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
  
  &:hover {
    animation: ${todoColourFade} 0.1s forwards;
  }
`

const Task = styled.span`
  width: 50%;
  word-wrap: break-word;
`

const Delete = styled.i`
  &:hover {
    animation: ${trashColourFade} 0.1s forwards;
  }
`

const Todo = ({ todo, handleTodoDelete, handlePriorityChange, handleDueDateChange, toggleCompleted }) => {
  return (
    <List>
      <input 
        type='checkbox' 
        onClick={() => toggleCompleted(todo.id)}
        defaultChecked={ todo.completed ? true : false }
      />
      <Task>{todo.task}</Task>
      <TodoSettings todo={todo} handlePriorityChange={handlePriorityChange} handleDueDateChange={handleDueDateChange} />
      <Delete className="fas fa-trash-alt" onClick={() => handleTodoDelete(todo.id)}>
      </Delete>
    </List>
  )
}

const Todos = ({ todos, sorter, handleTodoDelete, handlePriorityChange, handleDueDateChange, toggleCompleted }) => {
  
  console.log(todos)

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
  
  return (
    <ul>
      {todos
        .sort(sorter === 'priority' ? sortByPriority : sorter === 'due date' ? sortByDueDate : '')
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
