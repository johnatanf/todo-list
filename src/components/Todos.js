import React from 'react'
import styled from 'styled-components'

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
`

const Task = styled.span`
  width: 50%;
  word-wrap: break-word;
`

const Delete = styled.i`
  
`

const Todo = ({ todo, handleTodoDelete, handlePriorityChange, toggleCompleted }) => {
  return (
    <List>
      <input 
        type='checkbox' 
        onClick={() => toggleCompleted(todo.id)}
        defaultChecked={ todo.completed ? true : false }
      />
      <Task>{todo.task}</Task>
      <select defaultValue={todo.priority} onChange={event => handlePriorityChange(todo.id, event.target.value)}>
        <option value='high priority'>high priority</option>
        <option value='medium priority'>medium priority</option>
        <option value='low priority'>low priority</option>
      </select>
      <Delete className="fas fa-trash-alt" onClick={() => handleTodoDelete(todo.id)}>
      </Delete>
    </List>
  )
}

const Todos = ({ todos, handleTodoDelete, handlePriorityChange, toggleCompleted }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo}
          handleTodoDelete={handleTodoDelete}
          handlePriorityChange={handlePriorityChange}
          toggleCompleted={toggleCompleted}
        />
      )
      )}
    </ul>
  )
}

export default Todos;
