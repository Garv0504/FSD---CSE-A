/* eslint-disable no-unused-vars */
import React from 'react'
import Child1 from './Child1'

const AppProps = () => {
    const data = {
        name: "Rahul",
        branch: "CSE",
        section: "A"
    }
  return (
    <>
      <Child1 childData = {data}/>
    </>
  )
}

export default AppProps