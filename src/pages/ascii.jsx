import React from 'react'
import ASCIIText from '../components/asciitext'
import TextASCII from '../components/textascii'

const ASCIIPage = () => {
  return (
    <div>
      <div>
        <h1 className='title_text'>Convert from Text to ASCII</h1>
        <TextASCII />
      </div>
      <hr className='form_padding'/>
      <div>
        <h1 className='title_text'>Convert from ASCII to Text</h1>
        <ASCIIText />
      </div>
      <hr className='bottom_line'/>
      <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
    </div>
  )
}

export default ASCIIPage