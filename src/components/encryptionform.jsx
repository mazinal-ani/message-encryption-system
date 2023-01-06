import React from 'react';
import { useFormik } from "formik";
import './stylesheet.css';


const DataForm = () => {

  const formik = useFormik({
    initialValues: {
      publicKey: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://127.0.0.1:5000/encrypt', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values
            }),
          })
          .then(response => console.log(JSON.stringify(response)))
          }
    }
  );

  return(
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='publicKey'>
          Public Key: 
        </label>
        <input 
        id="publicKey"
        name="publicKey"
        type="publicKey"
        onChange={formik.handleChange}
        value={formik.values.publicKey}
        />
      </div>
      <div>
        <label htmlFor='message'>
          Message: 
        </label>
        <input 
        id="message"
        name="message"
        type="message"
        onChange={formik.handleChange}
        value={formik.values.message}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataForm