import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(()=>{  
    window.addEventListener('scroll', ()=>{
      window.scrollY >600  ? setSticky(true):setSticky(false);
    })
  },[])

  return (
   <nav className={`container ${sticky ? 'dark-nav' : ''} `}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li> <Link to='hero' smooth={true} offset={-240} duration={500}>Home</Link> </li>
            <li> <Link to='program' smooth={true} offset={-240} duration={500}>Program</Link> </li>
            <li> <Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link> </li>
            <li> <Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link> </li>
            <li> <Link to='testimonials' smooth={true} offset={-250} duration={500}>Testimonials</Link> </li>
            <li> <Link to='contact' smooth={true} offset={-250} duration={500} className='btn'> Contact Us </Link> </li>
        </ul>
   </nav>
  )
}

export default Navbar
