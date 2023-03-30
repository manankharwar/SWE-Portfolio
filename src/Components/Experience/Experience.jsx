import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { BiCheck } from 'react-icons/bi'
// talk about different co-ops you've had. Maybe you can also talk about your leadership involvement and extracurriculars as well !!!! YES DO IT!!
const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What Skills I Have 
      </h5>
      <h2>
        My Experience
      </h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>
            Programming Languages
          </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bash</h4>
                <small className='text-light'>Beginner</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Next.js React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>
          Dev Tools
          </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Jenkins</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CI/CD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>OpenShift</h4>
                <small className='text-light'>Beginner</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Algorand</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
<br /><br /><br />
      <h5>
        What I Bring To The Table 
      </h5>
      <h2>
        Co-op Experiences      
      </h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Bell Canada</h3>
            <h4>May 2021 - August 2021</h4>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>• Architected a new system to automate database xml workflows, saving approx 5 hours of manual per week</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Led a team of Managers and advisors for our daily scrum meetings</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designed a product to evaluate environmental, social & governance ("ESG") integration across client portfolios</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Intact Insurance Corporation</h3>
            <h4>May 2022 - April 2023</h4>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed, & improved a dashboard that gathered and visualized various KPI’s from all phases of the SDLC</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Built with Next.js React framework using Material-UI, Plotly.js components, served with Express, & TypeScript</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintained, built, and integrated pipelines and software deployment streams using Docker, & OpenShift environment</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Ensured security and quality of the code using Veracode, TwistLock, Nexus IQ scans, & SonarQube for quality</p>
          </li>
          </ul>
        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Ceridian HCM</h3>
            <h4>May 2023 - August 2023</h4>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed and maintained automation test suites using Specflow and Selenium</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Coordinated with developers, QA analysts, and product owners to produce stable and reliable automated tests</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Improved automation framework code to expand automated test coverage</p>
            </li>

            <li>
            <BiCheck className='service__list-icon'/>
            <p>Demonstrated proficiency in modern web technologies and programming languages like C#, Java, or C++</p>
          </li>
          </ul>
        </article>
      </div>
    </section>
    // have to add my experiences here bell, Intact, etc. Look for inspiration
    
  )
}

export default Experience