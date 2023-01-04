import React from 'react'
import ContactForm from '../components/contactform'

const ContactPage = () => {
  return (
    <div>
      <h1 className='title_text'>Use this page to contact the owner with site-related inquiries.</h1>
      <ContactForm />
      <hr className='bottom_line'/>
      <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
    </div>
  )
}

export default ContactPage