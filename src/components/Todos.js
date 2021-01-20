import React from 'react'

const Todo = ({ todo, handleTodoDelete, handlePriorityChange, toggleCompleted }) => {
  return (
    <li>
      <input 
        type='checkbox' 
        onClick={() => toggleCompleted(todo.id)}
        defaultChecked={ todo.completed ? true : false }
      />
      {todo.task} 
      <button onClick={() => handleTodoDelete(todo.id)}>delete</button>
      <select defaultValue={todo.priority} onChange={event => handlePriorityChange(todo.id, event.target.value)}>
        <option value='high priority'>high priority</option>
        <option value='medium priority'>medium priority</option>
        <option value='low priority'>low priority</option>
      </select>
    </li>
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
