import React from 'react'
import "./style.css"
import {pickRandom} from '../../../Utils/Helpers/mathFunctions';

const Letter= ({innerText}) => {
    const colors = ["#EDBB3E","#F77E40","#3EED6D","#4E3EED","#F7409D","#0CEDBB","#EDD40C"];
    const color =  pickRandom(colors);

    return (
        <p style={{color}} className='letter'> {innerText} </p>
    )
}

export default Letter