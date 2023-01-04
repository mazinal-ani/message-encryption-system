import React from 'react'
import './stylesheet.css'

const RSAdescription = () => (
    <div>
        <h1 className='title_text'>
            What is the RSA Encryption Scheme?
        </h1>
        <h2 className='description_text'>
            The RSA encryption scheme is a form of public-key cryptography. Before the introduction of public-key cryptography, symmetric-key encryption schemes were used, where the same key is used to both encrypt and decrypt a message. However, this presented a serious problem: how can one ensure that the key is securely transmitted to the message recipient? The solution to this problem is public-key cryptography. This method involves seperating encryption keys from decryption keys. The encryption keys are used to convert a plaintext message into an unintelligible ciphertext code. Similarly, the decryption keys are used to convert this ciphertext code back into the original plaintext message. One's encryption key is kept public in a repository, while their decryption key is kept private. While the two keys are mathematically related, the idea behind public-key cryptography is that an eavesdropper should be unable to determine the private key from the public key, even with the aid of computers. The RSA scheme, published in 1977, is built upon public-key cryptography.
        </h2>
    </div>
)


export default RSAdescription