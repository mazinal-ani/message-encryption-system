import { React, useState } from 'react';
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
      <div>
        <label htmlFor='privateKey'>
          Private Key: 
        </label>
        <input 
        id="privateKey"
        name="privateKey"
        type="privateKey"
        onChange={formik.handleChange}
        value={formik.values.privateKey}
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
      {responseData === null ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <p>Here is the data:</p>
          <pre>{JSON.stringify(responseData)}</pre>
        </div>
      )}
    </div>
  );
};

export default DecryptDataForm