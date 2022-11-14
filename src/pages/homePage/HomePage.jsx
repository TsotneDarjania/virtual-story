import React from 'react'
import { useState } from 'react'
import Footer from '../../Components/footer'
import Circles from '../../Components/molecules/Circles'
import HomePageTitle from '../../Components/molecules/homePageTitle'
import Popup from '../../Components/organisms/popUp'

import img1 from "../../img/image-1.png"
import img2 from "../../img/image-2.jpg"
import img3 from "../../img/image-3.png"


import "./style.css"



const HomePage = () => {
  

  const [circles,setCircles] = useState(false)

  setTimeout(() => {
    setCircles(true)
  }, 4000);

  return (
    <div className='home-page'>

        <div className='home-page-popUp-1 '>
          <Popup innerText="
          Virtual Story არის ინტერაქციული წიგნები, 
          რომელიც საშუალებას გაძლევს გააკეთო 
          არჩევანი და გავლენა მოახდინო ამბის თხრობაზე." 
          date={"2022/1/2"}
          toLeft={true}
          />
          <img src={img3} className="img img-1 show-1-popup" alt="" />
        </div>

        <div className='home-page-popUp-2 '>
          <Popup innerText="
          იდეა 2022 წლის დასაწყისში დაიბადა და დახვეწის და ექსპერიმენტების 
          შედეგად სტარტაპ კომპანიას დაედო საფუძვლად." 
          date={"2022/1/2"}
          toLeft={false}
          />
          <img src={img2} className="img img-2 show-2-popup" alt="" />
        </div>

        <div className='home-page-popUp-3 '>
          <Popup innerText="
          რამდენიმე ადგილობრივ და საერთაშორისო 
          აქსელერატორში მონაწილეობის შედეგად, Virtual Story გახდა 
          'Social Impact Award', 
          'Carec University ADB Digital', და 'EdTech Estonia'-ს გამარჯვებული." 
          date={"2022/1/2"}
          toLeft={true}
          />
          <img src={img1} className="img img-3 show-3-popup" alt="" />
        </div>

        
        <div className='home-page-homePageTitle'> <HomePageTitle /> </div> 
        {
          circles && <div className='home-page-circles'> <Circles/>   </div>
        } 

        <button className='play'> დაწყება </button>

        <Footer />
    </div>
  )
}

export default HomePage