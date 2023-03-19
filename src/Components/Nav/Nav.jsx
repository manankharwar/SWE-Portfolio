import React from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineAntDesign} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'     
import {RiServiceLine} from 'react-icons/ri'

// going to have about, experiences, projects, & contact
const Nav = () => {
  return (
    <nav>
      <a href='#'><AiOutlineHome /></a>
      <a href='#about'><AiOutlineUser /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#project'><RiServiceLine /></a>
      <a href='#portfolio'><AiOutlineAntDesign /></a>
      <a href='#contact'><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav