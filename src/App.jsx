import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Extracurriculars from './Components/Extracurriculars/Extracurriculars'
import Experience from './Components/Experience/Experience'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Extracurriculars />
      <Contact />  
      <Footer/>
    </>
  )
}

export default App