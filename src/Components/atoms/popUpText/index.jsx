import React from 'react'

import "./style.css"

const PopUpText = ({innerText}) => {
  return (
    <p className='pop-up-text'>  
        {innerText}
    </p>
  )
}

export default PopUpText