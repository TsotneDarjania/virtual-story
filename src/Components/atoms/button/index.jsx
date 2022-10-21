import React from 'react'
import "./style.css"


const Button = ({innerText,className}) => {

  return (
    <button  className={"default-btn " + className}> {innerText} </button>
  )

}

export default Button