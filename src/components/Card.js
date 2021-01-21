import React from 'react'
import CardHeading from './CardHeading'
import Sorter from './Sorter'
import CreateTodo from './CreateTodo'
import Todos from './Todos'
import styled from 'styled-components'

const StyledCard = styled.div`
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: white;
  margin: 80px auto 35px auto;
  width: 45%;
  min-width: 350px;
  max-width: 400px;
`

const Card = ({todos, todoInput, sorter, setSorter, setTodoInput, handleTodoSubmit, handleTodoDelete, handlePriorityChange, handleDueDateChange, toggleCompleted}) => {  
  return (
    <StyledCard>
      <CardHeading />
      <CreateTodo 
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        handleTodoSubmit={handleTodoSubmit}
      />
      <Sorter 
        sorter={sorter}
        setSorter={setSorter}
      />
      <Todos 
        todos={todos}
        sorter={sorter} 
        handleTodoDelete={handleTodoDelete}
        handlePriorityChange={handlePriorityChange}
        handleDueDateChange={handleDueDateChange}
        toggleCompleted={toggleCompleted}
      />      
    </StyledCard>
  )
}

export default Card