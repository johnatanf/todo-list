import React from 'react'
import styled from 'styled-components'

const StyledCardHeading = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #212121;
  color: white;
  font-family: Concert One, Open Sans, sans-serif;
  font-size: 2em;
  height: 2em;
  padding-left: 25px;
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px; 
`

const CardHeading = () => {
  return (
    <StyledCardHeading>
      TODO LIST
    </StyledCardHeading>
  )
}

export default CardHeading