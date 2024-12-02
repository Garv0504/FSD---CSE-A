// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

function StudentState() {
  // eslint-disable-next-line no-unused-vars
  const [count,setCount] = useState(0)
  const incrementHandler = () => {
    setCount(count+4)
  }
  const decrementHandler = () => {
    setCount(count-10)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={incrementHandler}>Increase count</button>
      <button onClick={decrementHandler}>Decrease count</button>
    </>
  )
}

export default StudentState