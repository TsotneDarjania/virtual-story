import React from 'react'
import "./style.css"

import Letter from '../../atoms/letter'


const HomePageTitle = () => {
    let animationName = "letter-top-scroll";
    let animationDelay = 0.5;

    const text = "VIRTUAL STORY";

    const title =  () => {
        const letters = []

        for (let i = 0; i < text.length; i++) {
            
            animationName === "letter-top-scroll" ? animationName = "letter-bottom-scroll" 
            :
            animationName = "letter-top-scroll";
            
            animationDelay += 0.2;
            let className;
            let letter = text[i];
            letter === " " ? className = "homepageTitle-space " : className = "homepageTitle-letter";
               
            letters.push(<div style={{
                animationDelay : animationDelay+"s",
                animationName
            }} className={className} key={i}> {<Letter innerText={letter} />} </div>)
            
        }

        return letters;
    }


  return (
    <div className='home-page-title'>
        {
            title()
        }
    </div>
  )
}

export default HomePageTitle