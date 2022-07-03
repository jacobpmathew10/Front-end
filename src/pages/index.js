import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import InfoSection from '../components/infosection';
import { homeObjone,homeObjtwo,homeObjthree } from '../components/infosection/Data';
const Home = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggle = () =>
    {
        setIsOpen(!isOpen);
    };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjone}/>
    <InfoSection {...homeObjtwo}/>
    <InfoSection {...homeObjthree}/>
    </>
  )
};

export default Home