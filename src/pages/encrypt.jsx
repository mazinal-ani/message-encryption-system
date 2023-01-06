import React, { useState } from 'react'
import './stylesheet.css'
import DataForm from '../components/encryptionform'
import DecryptDataForm from '../components/decryptionform'

const EncryptionPage = () => {

  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    fetch('http://127.0.0.1:5000/make_key',{mode: 'cors'})
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <button onClick={handleClick}>Generate</button>
        {responseData ? <h1 className='key_text'>{JSON.stringify(responseData)}</h1> : null}
      </div>
      <hr className='bottom_line'/>
      <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
    </div>
  )
}

export default EncryptionPage