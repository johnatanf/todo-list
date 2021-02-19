import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.div`
  padding: 10px 25px;
  display: flex;
  flex-direction: reverse-column;
  align-items: center;
  font-family: Open Sans, sans-serif;
  background: #d9d9d9;
`

const StyledSortMenu = styled.select`
  position: relative; 
  left: 10px;
  font-family: Open Sans, sans-serif;
  background: transparent;
  border: 0;
  font-size: 16px;
  min-width: 75px;
  &:focus {
    outline: none;
  }
`

const Sorter = ({ sorter, setSorter }) => {  

  return (
    <StyledFilter>
      <label>Sort by:</label>
      <StyledSortMenu defaultValue={sorter} onChange={event => setSorter(event.target.value)}>
        <option>priority</option>
        <option>due date</option>
      </StyledSortMenu>
    </StyledFilter>
  )
}

export default Sorter