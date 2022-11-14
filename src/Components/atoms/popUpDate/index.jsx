import React from 'react'
import "./style.css"

const PopUpDate = ({date,toLeft}) => {
  return (
    <div>
        {
            toLeft ? 
            <div className='pop-up-date date-right'> {date} </div>
            :
            <div className='pop-up-date date-left'> {date} </div>
        }
    </div>
  )
}

export default PopUpDate