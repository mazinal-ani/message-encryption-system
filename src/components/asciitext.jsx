import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import './stylesheet.css';

const ASCIIText = () => (
  <>
    <h1 className='form_descriptions'>Using ASCII Codes</h1>
    <Formik
      initialValues={{ message: "", acceptedTerms: false }}
      validate={(values) => {
        const errors = {};

        if (!values.acceptedTerms) {
          errors.acceptedTerms =
            "You must accept the terms and conditions before you proceed.";
        }

        if (!values.message) {
          errors.message = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.message)
        ) {
          errors.message = "Invalid message";
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
            <label className='inner_field_padding' htmlFor="Message">Message:</label>
            <Field type="text" name="Message" style={{ height: 150 }}/>
            <ErrorMessage name="Message" component="span" />
          </div>
          <div className='field_padding'>
            <label className='inner_field_padding' >Accept Terms: </label>
            <Field type="checkbox" name="acceptedTerms" />
            <ErrorMessage name="acceptedTerms" component="span" />
          </div>
          <button
            type="button"
            onClick={handleReset}
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

export default ASCIIText;