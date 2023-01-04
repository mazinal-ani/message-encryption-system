import React from 'react'
import DataForm from '../components/encryptionform'
import DecryptDataForm from '../components/decryptionform'

const EncryptionPage = () => {
  return (
    <div>
      <div>
        <h1 className='title_text'>Encryption Form</h1>
        <DataForm />
      </div>
      <hr className='form_padding'/>
      <div>
        <h1 className='title_text'>Decryption Form</h1>
        <DecryptDataForm />
      </div>
      <hr className='form_padding'/>
      <div>
        <h1 className='title_text'>Public/Private Key Generator</h1>
        <button>Generate</button>
      </div>
      <hr className='bottom_line'/>
      <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
    </div>
  )
}

export default EncryptionPage