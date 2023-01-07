import { React, useState } from 'react';
import Typed from 'react-typed';
import { useFormik } from "formik";
import './stylesheet.css';


const DecryptDataForm = () => {

  const [responseData, setResponseData] = useState(null);

  const formik = useFormik({
    initialValues: {
      privateKey: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://127.0.0.1:5000/decrypt', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values
            }),
          })
          .then(response => response.json())
          .then(data => setResponseData(JSON.stringify(data)))
          }
    }
  );

  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className='form_field'>
        <label htmlFor='privateKey'>
          Private Key: 
        </label>
        <textarea 
        id="privateKey"
        name="privateKey"
        type="privateKey"
        onChange={formik.handleChange}
        value={formik.values.privateKey}
        />
      </div>
      <div className='form_field'>
        <label htmlFor='message'>
          Message: 
        </label>
        <textarea
        id="message"
        name="message"
        rows="10"
        type="message"
        onChange={formik.handleChange}
        value={formik.values.message}
        />
      </div>
      <button type="submit">Submit</button>
      </form>
      <div className='field_padding'>
      {responseData === null ? (
        <Typed
        strings={["Awaiting input..."]}
        typeSpeed={25}
        backSpeed={10}
        loop/>
      ) : (
        <div>
          <h1 className='field_padding'>Here is your decrypted message:</h1>
          <h1 className='form_descriptions'>{responseData.replace(/"/g, '')}</h1>
        </div>
      )}
      </div>
    </div>
  );
};

export default DecryptDataForm