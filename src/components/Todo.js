import React, { useState, useEffect } from 'react'
import TodoSettings from './TodoSettings'
import styled, { keyframes, css } from 'styled-components'
import { Transition } from 'react-transition-group'
import iconSet from "../img/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const StyledList = styled.li`
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial;
  font-size: 16px;
  padding: 20px;
  border-top: 1px solid black;
  background: white;
  
  &:hover {
    animation: ${props => !props.todo.completed ? css`${todoColourFade} 0.1s forwards` : ''};
  }
`

const todoColourFade = keyframes`
  from {
    background-color: white;
  }

  to {
    background-color: #fafafa;
  }
`

const StyledTask = styled.span`
  flex: 1 1 50%;
  word-wrap: break-word;
  text-decoration: ${props => props.todo.completed ? 'line-through' : ''}
`

const StyledIconContainer = styled.div`
  display: flex;
  flex: 1 1 7%;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    bottom: -20px;
    left: -20px;
    right: -21px;
    transition: background-color .2s;
  }

  &:hover {
    ::before {
      background-color: red;
    }

    .icon {
      fill: white;
    }
  }
`

const StyledIcon = styled(IcomoonReact)`
  fill: #333;
  position: relative;
  z-index: 3;
  width: 60%;
`

const StyledListAnimation = styled(StyledList)`
  transition: 0.5s;
  opacity: ${({ state, todo }) => 
    state === 'entering' 
    ? '0.1' 
    : state === 'entered' && todo.completed 
    ? '0.7' 
    : state === 'entered' 
    ? '1' 
    : '0' 
  };
`

const Todo = (props) => {
  
  const [animateTodo, setAnimateTodo] = useState(false)

  useEffect(() => {
    if(!animateTodo) {
      setAnimateTodo(true)
    }
  }, [animateTodo])
  
  return (
    <Transition in={animateTodo} timeout={0}>
      {(state) => (
        <StyledListAnimation todo={props.todo} state={state}>
          <input 
            type='checkbox' 
            onClick={() => props.toggleCompleted(props.todo.id)}
            defaultChecked={ props.todo.completed ? true : false } 
          />
          <StyledTask todo={props.todo}>{props.todo.task}</StyledTask>
          <TodoSettings todo={props.todo} handlePriorityChange={props.handlePriorityChange} handleDueDateChange={props.handleDueDateChange} />
          <StyledIconContainer onClick={() => props.handleTodoDelete(props.todo.id)}>
            <StyledIcon className="icon" iconSet={iconSet} icon="bin"></StyledIcon>
          </StyledIconContainer>
        </StyledListAnimation>
      )}
    </Transition>
  )
}

export default Todo;