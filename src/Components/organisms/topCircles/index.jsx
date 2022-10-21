import React from 'react'
import Circles from '../../molecules/Circles'
import "./style.css"

const TopCircles = () => {

    let n = 4;

    let horizontal_lines = 4;

    const item =  () => {
        const item = []
        let marginLeft = 0;
        let marginTop = 0;

        for (let i = 0; i < horizontal_lines; i++) {
            for (let j = 0; j < n; j++) {
                item.push(<div style={{marginLeft, marginTop}} className='top-child-circles' key={i}> {<Circles />} </div>)
                marginLeft += 60;
            }
            
            n -= 1;
            marginLeft = 0;
            marginTop += 40;
        }

        return item;
    }


    return (
    <div className='top-circles'>
       {
        item()
       }
    </div>
  )
}

export default TopCircles