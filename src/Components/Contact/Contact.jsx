import React, { useRef } from 'react'
import './Contact.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FiTwitter } from 'react-icons/fi'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ugvq6rb', 'template_y9nq61p', form.current, 'OueEnEN9AxLGZZbRe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kharwarm@mcmaster.ca</h5>
            <a href='mailto:kharwarm@mcmaster.ca' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Manan Kharwar</h5>
            <a href='https://www.linkedin.com/in/manan-kharwar-779713154/' target="_blank" rel="noreferrer">Let's connect!</a>
          </article>

          <article className='contact__option'>
            <FiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Tweet Tweet!</h5>
            <a href='https://twitter.com/Manan11342072' target="_blank" rel="noreferrer">Let's Gossip</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type = 'text' name = 'name' placeholder='Your Full Name' required/>
          <input type = 'email' name = 'email' placeholder='Your Email' required/>
          <textarea name = 'message' row = '7' placeholder='Your Message' required></textarea>
          <button type = 'submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact