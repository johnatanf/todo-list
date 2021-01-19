import React from 'react'

const Todo = ({ todo, handleTodoDelete }) => {
  return (
    <li>
      {todo.task} <button onClick={() => handleTodoDelete(todo.id)}>delete</button>
    </li>
  );
}

const Todos = ({ todos, handleTodoDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo 
          key={todo.id} 
          todo={todo}
          handleTodoDelete={handleTodoDelete}
        />
      )
      )}
    </ul>
  )
}

export default Todos;
