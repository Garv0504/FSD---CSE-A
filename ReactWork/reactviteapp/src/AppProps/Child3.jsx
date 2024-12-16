/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Child3 = ({data}) => {
  return (
    <>
        <p>{data.name}</p>
        <p>{data.branch}</p>
        <p>{data.section}</p>
    </>
  )
}

export default Child3