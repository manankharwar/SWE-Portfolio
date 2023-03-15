import React from 'react'
import './Header.css'
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
      </div>
    </header>
  )
}

export default Header