import React from 'react';
import{Nav ,NavLogo,NavbarContainer,MobileIcon,NavMenu,Navitem,Navlinks,
NavBtn,NavBtnLink}from './Navbarelements';
import {FaBars} from 'react-icons/fa';
const Navbar = ({toggle}) => {
  return (
       <>
       <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                Sales prediction
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <Navitem>
                    <Navlinks to='about'>About</Navlinks>
                </Navitem>
                <Navitem>
                    <Navlinks to='discover'>Discover</Navlinks>

                </Navitem>
                <Navitem>
                    <Navlinks to='Services'>Services</Navlinks>
                </Navitem>
                <Navitem>
                    <Navlinks to='Signup'>Sign Up</Navlinks>
                </Navitem>
                
            </NavMenu>
            <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
               </NavbarContainer>
       </Nav>
       </>
    
  )
}

export default Navbar;