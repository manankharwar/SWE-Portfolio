import React from 'react'
import './Projects.css'
import decentralized from './192166593-fec6dba0-27c2-4cd3-b433-ff4e181d40f6 (1).jpg'
import mcmasterdesignleague from './ezgif.com-webp-to-jpg_mcmaster.jpg'
import handprosthesis from './ezgif.com-webp-to-jpg (1).jpg'
import shacks from './unknown.png'
import romba from './ezgif.com-webp-to-jpg.jpg'
import unity from './Screenshot 2023-03-29 212251.jpg'


// projects to add: 

/*
  . Decentralized Algo project -> DONE
  . Personal Website
  . SHacks (Scotiabank) -> DONE
  . Hand Prosthesis -> Done
  . McMaster Design League -> Done
  . iRobot Roomba -> Done
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
          <h3>Algorand Blockchain Cryptocurrency</h3>
          <div className='project__item-cta'>
          <a href='https://github.com/manankharwar/Robinhood_Hackathon_Payroll' className='project-btn' target="_blank" rel="noreferrer" >GitHub</a>
        </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={romba} alt=""/>
          </div>
          <h3>iRobot Roomba</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar/i-Robot-Roomba' className='btn' target="_blank" rel="noreferrer" >GitHub</a>
            <a href='https://drive.google.com/file/d/1EX4OADOl5hf0EHeYDBGFgjWU2BV3Rm6p/view?usp=sharing' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={shacks} alt=""/>
          </div>
          <h3>Finansible</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar' className='project-btn' target="_blank" rel="noreferrer" >GitHub</a>
            {/*<a href='https://github.com/manankharwar' className='btn btn-primary'>GitHub</a>*/}
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={unity} alt=""/>
          </div>
          <h3>Unity3D Game Dev</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar' className='btn' target="_blank" rel="noreferrer" >GitHub</a>
            <a href='https://drive.google.com/file/d/17KC7MQ7opteU1GrFX9ILeAEysSfGgDGD/view?usp=sharing' className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={mcmasterdesignleague} alt=""/>
          </div>
          <h3>This is a Project Item Title</h3>
          <div className='project__item-cta'>
            <a href='https://github.com/manankharwar' className='btn' target="_blank" rel="noreferrer" >GitHub</a>
            <a href='https://drive.google.com/file/d/12ORM2WlSkxeaR8gBZBgll5wWWPYjEHf2/view?usp=sharing' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='project__item'>
          <div className='project__item-image'>
            <img src={handprosthesis} alt=""/>
          </div>
          <h3>Design of a Hand Prosthesis</h3>
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
