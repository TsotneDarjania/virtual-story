import React from 'react'
import { useState } from 'react'
import "./style.css"

const colors = ["rgb(236, 147, 38)","rgb(38, 150, 236)","rgb(230, 128, 56)","black"]

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Circle = () => {

const [backgroundColor, setBackgroundColor] = useState(colors[randomNumberInRange(0,4)]);
const [scale] = useState((0.6 + Math.random()).toString())

  return (
    <div style={{ backgroundColor, scale }} onPointerEnter={ ()=> setBackgroundColor(colors[randomNumberInRange(0,4)]) } className='circle circle-red-hover'> </div>
  )
}

export default Circle