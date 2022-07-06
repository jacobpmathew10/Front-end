import React,{useState,useEffect} from 'react';
import{Nav ,NavLogo,NavbarContainer,MobileIcon,NavMenu,Navitem,Navlinks,
NavBtn,NavBtnLink}from './Navbarelements';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
const Navbar = ({toggle}) => {
    const[scrollNav,setScrollNav]=useState(false);
    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }

        };
        useEffect(() => {
          window.addEventListener('scroll',changeNav)
        }, []);
        const toggleHome=()=>{
            scroll.scrollToTop();
        };
        
  return (
       <>
       <IconContext.Provider value={{color:'#fff'}}>
       <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
               fore C sales
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <Navitem>
                    <Navlinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</Navlinks>
                </Navitem>
                <Navitem>
                    <Navlinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</Navlinks>

                </Navitem>
                <Navitem>
                    <Navlinks to='Signup'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</Navlinks>
                </Navitem>
                
            </NavMenu>
            <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
               </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    
  )
}

export default Navbar;