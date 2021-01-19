import React, { useState } from 'react'

const Todo = ({ todo }) => {
  return (
    <li>
      {todo.task} <button>delete</button>
    </li>
  );
}

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo}/>
      )
      )}
    </ul>
  )
}

export default Todos;
