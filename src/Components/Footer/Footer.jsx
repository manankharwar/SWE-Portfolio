import React from 'react'
import './Footer.css'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { RxGithubLogo } from 'react-icons/rx'
import {CgWebsite} from 'react-icons/cg'

// socials: LinkedIn, Blog, Instagram, Twitter, Github
const Footer = () => {
  return (
    <footer>
       { /*eslint-disable-next-line */}
      <a href='#' className='footer__logo'>Manan Kharwar</a>

      <ul className='permalinks'>
        { /*eslint-disable-next-line */}
        <li><a href = '#'>Home</a></li>
        <li><a href = '#about'>About</a></li>
        <li><a href = '#experience'>Experience</a></li>
        <li><a href = '#portfolio'>Portfolio</a></li>
        <li><a href = '#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href = 'https://www.linkedin.com/in/manan-kharwar-779713154/'><FaLinkedin /></a>
        <a href = 'https://github.com/manankharwar'><RxGithubLogo /></a>
        <a href = 'https://www.instagram.com/defnotmanaan/'><FiInstagram /></a>
        <a href = 'https://twitter.com/Manan11342072'><IoLogoTwitter /></a>
        <a href = 'https://nurturingmachines.wordpress.com/'><CgWebsite /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Manan Kharwar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer