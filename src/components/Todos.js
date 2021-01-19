import React, { useState } from 'react'

const Todo = ({ todo }) => {
  return (
    <li>
      <p>{todo.task}</p>
    </li>
  );
}

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo todo={todo}/>
      )
      )}
    </ul>
  )
}

export default Todos;
