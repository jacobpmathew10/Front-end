import React from 'react';
import { useNavigate}from 'react-router-dom'
import { Button } from '../ButtonElement';
import { Column2, ImgWrap ,Column1,InfoContainer,InfoRow,TopLine,Subtitle,Heading,Img,TextWrapper,InfoWrapper,BtnWrap} from './signupElements';
export const Signup  = ({lightBg,id,imgStart,topline,lightText,headline,img,description,darkText,alt,primary,dark,dark2,buttonlabel}) => {
 const navigate=useNavigate();
 
    return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topline}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                    <Button onClick={()=>{navigate('/signup');}} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={ dark ? 1 : 0 } dark2={dark2 ? 1 : 0}>{buttonlabel}</Button>
                </BtnWrap>
                </TextWrapper>
                </Column1>    
            <Column2>
                   <ImgWrap>
                   <Img src={img} alt={alt}/>
                   </ImgWrap> 
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
  )
};

export default Signup;