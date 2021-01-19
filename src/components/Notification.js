import React from 'react'

const Notification = ({ notification }) => {
  return (
    <div style={{display: notification === '' ? 'none' : 'block'}}>
      <p>{notification}</p>
    </div>
  )
}

export default Notification