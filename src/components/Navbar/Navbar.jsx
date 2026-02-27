import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLink';
import Logo from '../../assets/Logo.svg'
import { SideOpen } from './SideOpen';

function Navbar() {
    const [isScroll, setScroll]=useState(false)
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 100)
            {
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        })
    }, [])

  return (
    <div className={`w-full bg-white  fixed top-0 z-50 transition-all duration-300 md:px-10 px-2 border-b  ${isScroll ? "md:py-4 py-4 bg-white shadow-md" : "py-4 md:py-6"}`}>
        <div className='max-w-[95rem] px-5 mx-auto flex justify-between items-center'>
            <Link to='/' >
                <img src={Logo} className='w-24 md:w-44' alt="" />
            </Link>
            
            <NavLinks/>
            <SideOpen/>
        </div>
      
    </div>
  )
}

export default Navbar
