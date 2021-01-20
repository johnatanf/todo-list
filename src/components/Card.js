import React from 'react'
import CardHeading from './CardHeading'
import CreateTodo from './CreateTodo'
import Todos from './Todos'
import styled from 'styled-components'

const StyledCard = styled.div`
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: white;
  margin: 50px auto 0 auto;
  width: 45%;
  min-width: 350px;
  max-width: 400px;
`

const Card = ({todos, todoInput, setTodoInput, handleTodoSubmit, handleTodoDelete, handlePriorityChange, toggleCompleted}) => {  
  return (
    <StyledCard>
      <CardHeading />
      <CreateTodo 
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleTodoSubmit={handleTodoSubmit}
      />
      <Todos 
        todos={todos} 
        handleTodoDelete={handleTodoDelete}
        handlePriorityChange={handlePriorityChange}
        toggleCompleted={toggleCompleted}
      />      
    </StyledCard>
  )
}

export default Card