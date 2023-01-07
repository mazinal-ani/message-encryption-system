/*import { React } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import './stylesheet.css';

const DataForm = () => (
  <>
    <h1 className='form_descriptions'>Enter the Following Fields:</h1>
    <Formik

      const formik = useFormik({

      }
      );
      initialValues={{ name: "", email: "", message: "", acceptedTerms: false }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        
        if (!values.message) {
            errors.name = "Required";
          }

        if (!values.acceptedTerms) {
          errors.acceptedTerms =
            "You must accept the terms and conditions before you proceed.";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
          <div className='field_padding'>
            <label className='inner_field_padding'>
              Name: 
            </label>
            <Field 
            type="text" 
            name="name" 
            onChange={formik.handleChange}
            value={formik.values.message}
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className='field_padding'>
            <label className='inner_field_padding' htmlFor="email">Email:</label>
            <Field 
            type="email" 
            name="email" 
            onChange={formik.handleChange}
            value={formik.values.email}/>
            <ErrorMessage name="email" component="span" />
          </div>
          <div className='field_padding'>
            <label className='inner_field_padding'>
              Message:
            </label>
            <Field 
            type="text" 
            name="message" 
            style={{ height: 150 }}
            onChange={formik.handleChange}
            value={formik.values.message}
            />
            <ErrorMessage name="message" component="span" />
          </div>
          <div className='field_padding'>
            <label className='inner_field_padding'>Accept Terms:</label>
            <Field type="checkbox" name="acceptedTerms" />
            <ErrorMessage name="acceptedTerms" component="span" />
          </div>
          <button
            type="button"
            onClick={formik.handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </>
);

export default DataForm;*/














import { React, useState } from 'react';
import Typed from "react-typed";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import './stylesheet.css';


const DataForm = () => {

  const [responseData, setResponseData] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required.";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.message) {
        errors.message = "Message is required.";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
      fetch('http://127.0.0.1:5001/submit', {
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
    });

  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className='form_field'>
        <label htmlFor='name'>
          Name: 
        </label>
        <div className='form_field_small'>
          <textarea
          id="name"
          rows="1"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (<div>{formik.errors.name}</div>)}
        </div>
      </div>
      <div className='form_field'>
        <label htmlFor='name'>
          Email: 
        </label>
        <div className='form_field_contact'>
          <textarea
          id="email"
          rows="1"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (<div>{formik.errors.email}</div>)}
        </div>
      </div>
      <div className='form_field'>
        <label htmlFor='message'>
          Message: 
        </label>
        <div className='form_field_contact'>
          <textarea 
          id="message"
          rows="10"
          name="message"
          type="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (<div>{formik.errors.message}</div>)}
        </div>
      </div>
      <button type="submit">Submit</button>
      <button onClick={formik.handleReset}>Reset</button>
      </form>
      <div className='field_padding'>
      {responseData === null ? (null) : (
        <div>
          <h1 className='form_descriptions'>{responseData.replace(/"/g, '')}</h1>
        </div>
      )}
      </div>
    </div>
  );
};

export default DataForm