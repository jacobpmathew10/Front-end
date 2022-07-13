import React from 'react'
import './predic.css'
import { VideoBg,HeroBg,Herocontainer } from './predictionelements'
import Video from "../videos/Video4.mp4"
import { HeroBtnWrapper } from '../components/Herosection/Heroelements'
const Prediction = ({handleSignout}) => {
  return (
    <div className='hero'>
      <nav>
        <h2 className='logo'>DigiForecast</h2>
        <h2 className='welcome'>Welcome</h2>
        
        <button onClick={handleSignout}>Logout</button>

      </nav>
      
      <Herocontainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroBtnWrapper>
    
            <a  class="button" href='https://14751.gradio.app/' alt='predict'>Predict</a>
    
        </HeroBtnWrapper>
     
      </Herocontainer>
      
      
      </div>
  )
}

export default Prediction

