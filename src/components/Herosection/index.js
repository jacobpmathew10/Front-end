import React ,{useState} from 'react';
import Video from'../../videos/Video.mp4';
import { Herocontainer,HeroBg,VideoBg,HeroH1,HeroContent,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './Heroelements';
import { Button } from '../ButtonElement';
const HeroSection = () => {

  const[hover,setHover]=useState(false)
  const onHover=()=>{
    setHover(!hover);
  }
  return (
    <Herocontainer >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Sales Made Easy</HeroH1>
        <HeroP>
          Sign up for an account today and get 1 month free trial
        </HeroP>
        <HeroBtnWrapper>
          <Button to='Signup' onMouseEnter={onHover} OnMouseLeave={onHover}
          primary='true'
          dark='true'>
            Get Started {hover ? <ArrowForward/>:<ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </Herocontainer>
  )
};

export default HeroSection