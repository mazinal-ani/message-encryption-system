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

    validate: (values) => {
      const errors = {};
      if (!values.privateKey) {
        errors.privateKey = "Required";
      } else if (
        !/^[0-9]+\s[0-9]+$/.test(values.privateKey)
      ) {
        errors.privateKey = "Invalid Public Key. Please Enter As: <X Y> where X is the first number and Y is the second in the key.";
      }

      if (!values.message) {
        errors.message = "Message is required.";
      } else if (
        !/^[0-9\s]+$/.test(values.message)
      ) {
        errors.message = "Invalid Message. Please enter as numbers followed separated by spaces.";
      }

      return errors;
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
        rows="1"
        onChange={formik.handleChange}
        value={formik.values.privateKey}
        />
        {formik.touched.privateKey && formik.errors.privateKey && (<div>{formik.errors.privateKey}</div>)}
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
        {formik.touched.message && formik.errors.message && (<div>{formik.errors.message}</div>)}
      </div>
      <button onClick={formik.handleReset}>Reset</button>
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