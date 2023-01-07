import React, { useState } from 'react'
import './stylesheet.css'
import DataForm from '../components/encryptionform'
import DecryptDataForm from '../components/decryptionform'
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set, onValue } from "firebase/database"

const EncryptionPage = () => {

  const [responseData, setResponseData] = useState(null)
  const [savedKey, setSavedKey] = useState(null)

  const auth = getAuth()
  const user = auth.currentUser
  
  

  function handleSaveKey() {
    const db = getDatabase()
    set(ref(db, `keys/${user.uid}`), {
      keys: responseData
    })
  }

  function handleRetrieveKey() {
    const db = getDatabase()
    const userRef = ref(db, `keys/${user.uid}`)
    onValue(userRef, (snapshot) => {
      setSavedKey(snapshot.val())
    })
  }

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
        {responseData ? <h1 className='key_text'>{responseData.replace(/"/g, '')}</h1> : null}
        {user ? 
        (<div>
          <button onClick={handleSaveKey}>Save Key</button> 
          <button onClick={handleRetrieveKey} className="key_button_padding">Retrieve Saved Key</button>
        </div>)
        : null}
        {savedKey ? <div><h1 className='saved_key_title_text'>Here are your saved keys: </h1>
        <div className='saved_key_text'>{savedKey.keys}</div></div> : null}
      </div>
      <hr className='bottom_line'/>
      <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
    </div>
  )
}

export default EncryptionPage