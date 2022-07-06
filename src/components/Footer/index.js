import React from 'react'
import { FaInstagram, FaTwitter,FaFacebook, FaCopyright } from 'react-icons/fa'
import { FooterContainer,Footerwrap,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <Footerwrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                       Digi Forecast
                    </SocialLogo>
                    <WebsiteRights>Digi Forecast <FaCopyright></FaCopyright> {new Date().getFullYear()} All Rights Reserved. </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="//Instagram.com" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="//Twitter.com" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </Footerwrap>
    </FooterContainer>
  )
}

export default Footer