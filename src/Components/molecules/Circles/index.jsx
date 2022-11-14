import React from 'react'
import "./style.css"

import Circle from '../../atoms/Circle'


const Circles = () => {

    const n = 200;

    const circles = () => {
        const circles = [];
        let animationDelay = 0.2;

        for (let i = 0; i < n; i++) {
            const circle = <div style={{animationDelay:animationDelay+"s"} } className='circles-circle' key={i} > <Circle /> </div>
            animationDelay += 0.07;
            circles.push(circle)
        }


        return circles;
    }

    return (
    <div className='circles'>
        {  
           circles()
        }
    </div>
  )
}

export default Circles