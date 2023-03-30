import React from 'react'
import './Projects.css'
import decentralized from './192166593-fec6dba0-27c2-4cd3-b433-ff4e181d40f6 (1).jpg'
import handprosthesis from './prosthesis.jpg'
import shacks from './unknown.png'
import romba from './ezgif.com-webp-to-jpg.jpg'
import unity from './Screenshot 2023-03-29 212251.jpg'
import medX from './Picture1.jpg'

// projects to add: 

/*
  . Decentralized Algo project -> DONE
  . Personal Website
  . SHacks (Scotiabank) -> DONE
  . Hand Prosthesis -> Done
  . McMaster Design League -> Done
  . iRobot Roomba -> Done
  . Hack the Month 
*/
const Projects = () => {
  return (
    <section id='project'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>
      <div className='container project__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={decentralized} alt=""/>
          </div>
          <h2>ALGOPAY.io</h2>
          <h4>A payroll system that enables an employer to understand the importance of fair pay, thus reducing pay inequality, & racial justice</h4> 
          <div className='project__item-cta'>
          <a href='https://github.com/manankharwar/Robinhood_Hackathon_Payroll' className='project-btn' target="_blank" rel="noreferrer" >GitHub</a>
          </div>
          
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={romba} alt=""/>
          </div>
          <h2>iRobot Roomba</h2>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar/i-Robot-Roomba' className='btn' target="_blank" rel="noreferrer" >GitHub</a>
            <a href='https://drive.google.com/file/d/1EX4OADOl5hf0EHeYDBGFgjWU2BV3Rm6p/view?usp=sharing' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={shacks} alt=""/>
          </div>
          <h2>Finansible</h2>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar' className='project-btn' target="_blank" rel="noreferrer" >GitHub</a>
            {/*<a href='https://github.com/manankharwar' className='btn btn-primary'>GitHub</a>*/}
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={unity} alt=""/>
          </div>
          <h2>Unity3D Game Dev</h2>
          <h4> Unity3D project focused on scripting & building working functionality.</h4><br />
          <ul>
            <li>Controls Non-player character (NPC)</li>
            <li>Behavior and Interactions</li>
            <li>Environmental Objects and Physics</li>
            <li>Audio and visual effects</li>
            <li>User interface and menus</li>
            <li>multiplayer functionality</li>
          </ul>
          <div className='project__item-cta'>
            <a href='https://drive.google.com/file/d/17KC7MQ7opteU1GrFX9ILeAEysSfGgDGD/view?usp=sharing' className='project-btn' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={medX} alt=""/>
          </div>
          <h2>MedX</h2>
          <h4>
          Built an application that helped less-educated people easily find suitable medicines or prescriptions. <br /> <br />
          The application used image detection and parsing through a database to provide users with information in laymen's language, such as the name of the medicine and how to use it. 
          </h4>
          <div className='project__item-cta'>
            { /*<a href='https://github.com/manankharwar' className='btn' target="_blank" rel="noreferrer" >GitHub</a> */}
            <a href='https://drive.google.com/file/d/12ORM2WlSkxeaR8gBZBgll5wWWPYjEHf2/view?usp=sharing' className='project-btn' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={handprosthesis} alt=""/>
          </div>
          <h2>Design of a Hand Prosthesis</h2>
          <h4>Designed prosthesis for missing hand's forefinger and thumb with range of motion approximation for point-of-contact</h4>
          
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar/Hand-Prosthesis' className='btn' target="_blank" rel="noreferrer" >GitHub</a>
            <a href='https://drive.google.com/file/d/17A2wGJ5LFHTujLH7ILbZ5_yT6Ec1r-yX/view?usp=sharing' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div> 
        </article>
      </div>
    </section>
  )
}

export default Projects
