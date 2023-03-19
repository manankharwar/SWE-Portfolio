import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/manan-kharwar-779713154/' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/manankharwar' target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href='https://twitter.com/Manan11342072' target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials