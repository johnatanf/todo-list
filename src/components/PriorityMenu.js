import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  position: absolute;
  right: 25px;
  width: 125px;
  z-index: 100;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, .7);
  cursor: pointer;

  .icon {
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
  }

  .high {
    color: #ff4d4d;
  }

  .medium {
    color: #ffb624;
  }

  .low {
    color: #32a6a8;
  }
`

const StyledOption = styled.li`
  display: flex;
  flex-direction: row;
  padding: .5rem 0;
  color: black;
  font-weight: 400;
  font-size: .8rem;

  .icon {
    flex: 0 0 1.5rem;
    text-align: center;
  }

  &:hover {
    background-color: #333;
    color: white;
  }
`

const PriorityMenu = ({ todo, handlePriorityChange }) => {
  return (
    <StyledMenu className="styled-menu">
      <StyledOption onClick={() => handlePriorityChange(todo.id, 'high priority')}>
        <span className="icon high">!!!</span>
        <span>high</span>
      </StyledOption>
      <StyledOption onClick={() => handlePriorityChange(todo.id, 'medium priority')}>
        <span className="icon medium">!!</span>
        <span>medium</span>
      </StyledOption>
      <StyledOption onClick={() => handlePriorityChange(todo.id, 'low priority')}>
        <span className="icon low">!</span>
        <span>low</span>
      </StyledOption>
    </StyledMenu>
  )
}

export default PriorityMenu;