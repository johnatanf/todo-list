import React from 'react'
import styled from 'styled-components'
import iconSet from "../img/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const StyledFilter = styled.div`
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Open Sans, sans-serif;
  background: #d9d9d9;
`

const StyledButtonCollection = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`

const StyledButton = styled.button`
  background-color: transparent;
  
  height: 3rem;
  width: 3rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin: 0 .5rem;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  transition: all .1s;
  
  background-color: ${props => props.className === 'active' ? '#333' : 'transparent'};
  color: ${props => props.className === 'active' ? 'white' : '#333'};
  fill: ${props => props.className === 'active' ? 'white' : '#333'};

  .icon {
    width: 70%;
  }

  &:hover {
    background-color: #333;
    color: white;
    fill: white;
  }
`

const Sorter = ({ sorter, setSorter }) => {  

  return (
    <StyledFilter>
      <label>Sort by:</label>

      <StyledButtonCollection>
        <StyledButton className={sorter === 'priority' ? 'active' : ''} onClick={() => setSorter('priority')}>
          !!!
        </StyledButton>
        <StyledButton className={sorter === 'due date' ? 'active' : ''} onClick={() => setSorter('due date')}>
          <IcomoonReact className="icon" iconSet={iconSet} icon="alarm" />
        </StyledButton>
      </StyledButtonCollection>
    </StyledFilter>
  )
}

export default Sorter