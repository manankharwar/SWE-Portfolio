import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials'
import Manan from './Manan_Kharwar-removebg.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>
          Hello I'm
        </h5>
        <h1>
          Manan Kharwar
        </h1>
        <h5 className='text-light'>
          Currently a Test Automation Intern
        </h5>
        <CTA />
        <div className='me'>
          <img src={Manan} alt='Manan Kharwar' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

        <div>
          <HeaderSocials />
        </div>
      </div>
    </header>
  )
}

export default Header