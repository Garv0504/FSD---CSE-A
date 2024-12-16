/* eslint-disable no-unused-vars *//* eslint-disable react/prop-types */

import React from 'react'
import Child2 from "./Child2.jsx"

const Child1 = ({childData}) => {
  return (
    <Child2 data = {childData}/>
  )
}

export default Child1