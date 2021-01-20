import React from 'react'
import styled from 'styled-components'

const StyledNotification = styled.div`
  position: relative;
  top: 0px;
  margin: 0 auto;
  text-align: center;
`

const Notification = ({ notification }) => {
  return (
    <StyledNotification>
      {notification}
    </StyledNotification>
  )
}

export default Notification