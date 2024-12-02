// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import logo from "./assets/logo.jpg"

const ImageManipulation = () => {
    const [height, setHeight] = useState(300)
    const [width, setWidth] = useState(200)
    const [rotate, setRotate] = useState(0)
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const heightHandler = () => {
        setHeight(height+50)
    }
    const widthHandler = () => {
        setWidth(width+50)
    }
    const rotateHandler = () => {
        const img = document.getElementById('image')
        img.style.transform = `rotateZ(${setRotate(rotate + 15)}deg)`;
    }
    const bgHandler = () => {
        let r = Math.ceil(Math.random()*250)
        let g = Math.ceil(Math.random()*250)
        let b = Math.ceil(Math.random()*250)

        setRed(r)
        setGreen(g)
        setBlue(b)
    }

  return (
    <>
        <div style={{height: 'fit-content', width: 'fit-content', border: '2px solid red', padding: "20px 30px", backgroundColor: `rgb(${red},${green},${blue})`}}>
            <div><img style={{transform: `rotateZ(${rotate}deg)`}} id='image' src={logo} height={height} width={width}/></div>
        </div>

        <div style={{backgroundColor: "black", width:'fit-content', position: 'absolute', bottom: '100px', left:'500px'}}>
        <button onClick={heightHandler}>Enhance Height</button>
        <button onClick={widthHandler}>Enhance Width</button>
        <button onClick={rotateHandler}>Rotate Image</button>
        <button onClick={bgHandler}>Change BGColor</button>
        </div>
    </>
  )
}

export default ImageManipulation
