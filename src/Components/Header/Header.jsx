import React, { useState } from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials'
import Manan from './Manan_Kharwar-removebg.png'
import { useEffect } from 'react'

const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(80);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Senior At McMaster University", "Test Automation Intern", "Looking for SWE New Grad roles!" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(80);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <header>
      <div className='container header__container'>
        <h1 className='headerbanner'>
          Hello I'm
        </h1>
        <h1 className='honeClass'>
          Manan Kharwar
        </h1>
        <h3>
          <span className='text-light_header'>
            {text}|
          </span>
        </h3>
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