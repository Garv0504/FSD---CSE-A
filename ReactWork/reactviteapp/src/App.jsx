// eslint-disable-next-line no-unused-vars
import React from 'react'
// import logo from "./assets/logo.jpg"
// import StudentState from './StudentState'
import ImageManipulation from './ImageManipulation'

function App() {
  // let a = 12
  // const myStyle = {
  //   backgroundColor: "black"
  // }

  // const myStyle2 = {
  //   color: "red",
  //   backgroundColor: "black",
  //   padding: "10px 20px",
  //   width: "fit-content"
  // }

  // const data = [
  //   {
  //     college:"Abes Engineering College",
  //     roll:'61',
  //     name:'Garv Agarwal',
  //     branch:'CSE',
  //     section:"A",
  //     pic:logo 
  //   },
  //   {
  //     college:"Abes Engineering College",
  //     roll:'04',
  //     name:'Adarsh Mani',
  //     branch:'CSE',
  //     section:"A",
  //     pic:logo 
  //   },
  //   {
  //     college:"Abes Engineering College",
  //     roll:'09',
  //     name:'Aditya Singh',
  //     branch:'CSE',
  //     section:"A",
  //     pic:logo 
  //   }
  // ];

  return (
    <>
      {/* <div style={myStyle2}>Abes Engineering college
        <div style={myStyle}>{a}</div>
      </div>
      <div style={{backgroundColor: "cyan", display: "flex"}}>
        <Student data={data[0]} />

        <Student data={data[1]}/>

        <Student data={data[2]}/>
      </div> */}

      {/* <StudentState/> */}
      <ImageManipulation />
    </>
  )
}

export default App