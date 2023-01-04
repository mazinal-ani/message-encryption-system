import React from 'react'
import './stylesheet.css'

const RSAusage = () => (
    <div>
        <h1 className='title_text'>
            How to Use the Encryption Tool
        </h1>
        <h2 className='description_text'>
            The Encryption Tool page contains two main programs. The first, when given a public key and a plaintext message, encrypts the message into ciphertext. The other program performs the opposite step; it deciphers an encrypted message using an inputted private key. There is also a tool at the bottom of the Encryption Tool page that can be used to generate public and private keys. The ASCII Conversion page can be used to convert a text message into the corresponding ASCII numbers, which can then be used in the encryption tools.
        </h2>
    </div>
)


export default RSAusage