import React from 'react'
import './stylesheet.css'

const RSAmath = () => (
    <div>
        <h1 className='title_text'>
            The Process Behind the RSA Scheme
        </h1>
        <h2 className='description_text'>
            The RSA scheme can be broken up into three principal parts. The first involves setting up the public and private keys. This can be done by selecting two, very large, arbitrary prime numbers. Then, using modular arithmetic, two numbers are found. The first is used in the public key, while the second is kept secret in the private key. The next step in the scheme is the encryption process. Here, using modular arithmetic again, a message is converted into ciphertext and then sent to the recipient. The final step, which uses modular arithmetic yet again, involves the recipient decrypting this ciphertext message using their private key. If the RSA process is successful, then this decrypted message will be identical to the plaintext message that was encrypted in the second step. More information about this process can be found at <a className='link_text' href='https://en.wikipedia.org/wiki/RSA_(cryptosystem)'>this link</a>.
        </h2>
    </div>
)

export default RSAmath