import React from 'react'
import { Column2, ImgWrap ,Column1,InfoContainer,InfoRow,TopLine,Subtitle,Heading,BtnWrap,Img,TextWrapper,InfoWrapper} from './infoElement'
/* import { Button } from '../ButtonElement' */
const InfoSection = ({lightBg,id,imgStart,topline,lightText,headline,img,description,buttonlabel,darkText,alt,primary,dark,dark2}) => {
  return (
   <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topline}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    {/* <BtnWrap>
                        <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={ dark ? 1 : 0 } dark2={dark2 ? 1 : 0}>{buttonlabel}</Button>
                    </BtnWrap> */}
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
    </>
  )
};

export default InfoSection