import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: 20px;
`

const StyledNotification = styled.div`
  display: ${props => props.notification ? 'block' : 'none'};
  margin: 0 auto;
  width: 50%;
  min-width: 160px;
  max-width: 250px;
  padding: 10px 0;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  text-align: center;
  font-family: Concert One;
  font-size: 14px;
  background: white;
`

const Notification = ({ notification }) => {
  return (
    <StyledContainer>
      <StyledNotification notification={notification}>
        {notification}
      </StyledNotification>
    </StyledContainer>
  )
}

export default Notification