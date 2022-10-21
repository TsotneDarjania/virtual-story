import React from 'react'
import "./style.css"

import Circle from '../../atoms/Circle'
import { useState } from 'react';

const Circles = () => {

    const n = 14;

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [gap] = useState(randomNumberInRange(20,30));

    return (
    <div className='circles'>
        {  
            [...Array(n)].map((e, i) => <Circle key={i} /> )
        }
    </div>
  )
}

export default Circles