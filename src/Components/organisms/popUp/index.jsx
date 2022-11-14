import React from 'react'
import "./style.css"
import PopUpText from '../../atoms/popUpText'
import PopUpDate from '../../atoms/popUpDate'
import { useState } from 'react'
import { useEffect } from 'react'

const PopUp = ({innerText,date,toLeft}) => {

    const [extraName,setExtraClassName] = useState("")

    useEffect( () => {
        toLeft ?
        setExtraClassName("pop-up-left")
        :
        setExtraClassName("pop-up-right")

    },[])

  return (
    <div className={'pop-up ' + extraName} >
        <PopUpText innerText={innerText} />
        <PopUpDate toLeft={toLeft} date={date} />
    </div>
  )
}

export default PopUp