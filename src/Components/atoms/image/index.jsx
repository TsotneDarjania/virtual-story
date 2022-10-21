import React from 'react'



const Image = ({className,src}) => {
  return (
    <img className={"default-img " + className} src={src} alt="" />
  )
}

export default Image