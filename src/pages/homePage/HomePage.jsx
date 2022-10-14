import React from 'react'

import Button from '../../Components/atoms/button'

const HomePage = () => {
  return (
    <div>
        <Button onClick={ () => console.log("click")} className="menu-btn" innerText="დაწყება" />
        


    </div>
  )
}

export default HomePage