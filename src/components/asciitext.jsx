import { React, useState } from 'react';
import Typed from "react-typed";
import { useFormik } from "formik";
import './stylesheet.css';


const ASCIIText = () => {

  const [responseData, setResponseData] = useState(null);

  const formik = useFormik({
    initialValues: {
      message: '',
    },

    validate: (values) => {
      const errors = {};

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
      fetch('http://127.0.0.1:5000/ASCIItext', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values,
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
            <h1 className='field_padding'>Here is your message in alphanumeric characters:</h1> 
            <h1 className='form_descriptions'>{responseData.replace(/\\"/g, '"').replace(/^"|"$/g, '')}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ASCIIText