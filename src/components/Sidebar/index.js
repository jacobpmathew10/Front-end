import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SidebarWrapper,SideBtnWrap,SidebarLink,SidebarRoute,SidebarMenu} from './Sidebarelements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
        </Icon >
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="About" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="Discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="Services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="Signup"onClick={toggle} >Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" >Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>  
    </SidebarContainer>
  )
}

export default Sidebar