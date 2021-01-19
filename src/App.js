import React, { useState } from 'react'
import CreateTodo from './components/CreateTodo'

const App = () => {
  const [todoInput, setTodoInput] = useState('')
  
  return (
    <div>
      <CreateTodo todoInput={todoInput} setTodoInput={setTodoInput} />
      <p>testing</p>
    </div>
  );
}

export default App;
