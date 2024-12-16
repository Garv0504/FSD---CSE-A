/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {mycontext} from '../AppContext.jsx'

const Child3 = () => {
    const receive = useContext(mycontext)
  return (
    <>
        <div>Child3</div>
        <p>{receive.name}</p>
    </>
  )
}

export default Child3