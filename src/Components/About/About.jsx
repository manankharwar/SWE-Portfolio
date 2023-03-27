import React from 'react'
import './About.css'
import ME from './IMG_0443_square.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>
      Get To Know
      </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt = "personal photo"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>
          </div>

          <p>
            <strong>I am on a continuous journey to learn.</strong> <br /><br />

            There is always something new to discover, perhaps a new kind of technology that can be applied in various ways or a new algorithm to reduce a coding challenge solution's time complexity. Nevertheless, these discoveries all serve one overarching goal: how can we, as humans, bring an impactful career to society and evolve success in every possible way.<br />
            <br />
            Systems are how we view the world. Design is how we change the world. <br /><br />
            As a senior studying Engineering Physics (co-op) at McMaster University, I am excited to explore entrepreneurial ventures in the technology sector and incorporate innovative design into our everyday lives.
          </p>

          <a href="#contact" className = 'btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About