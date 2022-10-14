import React from 'react'

import "./style.css"


const Button = (props) => {

  const {innerText,className,onClick} = props

  return (
    <button className={className} onClick={onClick}> {innerText} </button>
  )

}

export default Button