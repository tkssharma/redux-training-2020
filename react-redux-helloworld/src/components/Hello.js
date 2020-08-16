import React from 'react'

const Hello = ({ onClick, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}


export default Hello
