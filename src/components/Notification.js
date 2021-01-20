import React from 'react'
import styled from 'styled-components'

const NotificationStyle = styled.div`
  position: relative;
  top: 0px;
  margin: 0 auto;
  text-align: center;
`

const Notification = ({ notification }) => {
  return (
    <NotificationStyle>
      {notification}
    </NotificationStyle>
  )
}

export default Notification