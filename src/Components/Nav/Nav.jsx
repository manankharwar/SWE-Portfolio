import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineAntDesign} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'     
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


// going to have about, experiences, projects, & contact
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    { /*eslint-disable-next-line */}
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineAntDesign /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav