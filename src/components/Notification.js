import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledNotification = styled.div`
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

const StyledNotificationAnimation = styled(StyledNotification)`
  transition: 0.5s;
  margin: ${({ state }) => state === 'entering' || state === 'entered' ? '30px' : '-30px'} auto;
  opacity: ${({ state }) => state === 'entering' || state === 'entered' ? '1' : '0'};
`

const Notification = ({ notification, animateNotification }) => {
  
  return (
    <StyledContainer>
      <Transition in={animateNotification} timeout={500}>
        {(state) => (
          <StyledNotificationAnimation state={state}>
            {notification}
          </StyledNotificationAnimation>
        )}
      </Transition>
    </StyledContainer>
  )
}

export default Notification