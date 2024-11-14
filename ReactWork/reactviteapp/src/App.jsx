// eslint-disable-next-line no-unused-vars
import React from 'react'
import Student from './Student'

function App() {
  let a = 12
  const myStyle = {
    backgroundColor: "black"
  }

  const myStyle2 = {
    color: "red",
    backgroundColor: "black",
    padding: "10px 20px",
    width: "fit-content"
  }


  return (
    <>
      <div style={myStyle2}>Abes Engineering college
        <div style={myStyle}>{a}</div>
      </div>
      <div style={{backgroundColor: "cyan"}}>
        <Student college="Abes Engineering College" roll='61' name='Garv Agarwal' branch='CSE' section="A"/>
      </div>
    </>
  )
}

export default App