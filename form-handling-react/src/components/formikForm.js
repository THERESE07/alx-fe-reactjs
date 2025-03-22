import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function formikForm() {
    // Validation schema
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      });
    
      // Initial values for the form fields
      const initialValues = {
        username: '',
        email: '',
        password: '',
      };
    
      // Handle form submission
      const handleSubmit = (values) => {
        console.log('Form submitted:', values);
      };
    
      return React.createElement(
        'div',
        null,
        React.createElement('h2', null, 'Formik Registration Form'),
        React.createElement(
          Formik,
          { initialValues, validationSchema, onSubmit: handleSubmit },
          () =>
            React.createElement(
              Form,
              null,
              React.createElement(
                'div',
                null,
                React.createElement('label', null, 'Username:'),
                React.createElement(Field, { type: 'text', name: 'username' }),
                React.createElement(ErrorMessage, {
                  name: 'username',
                  component: 'div',
                  style: { color: 'red' },
                })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('label', null, 'Email:'),
                React.createElement(Field, { type: 'email', name: 'email' }),
                React.createElement(ErrorMessage, {
                  name: 'email',
                  component: 'div',
                  style: { color: 'red' },
                })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('label', null, 'Password:'),
                React.createElement(Field, { type: 'password', name: 'password' }),
                React.createElement(ErrorMessage, {
                  name: 'password',
                  component: 'div',
                  style: { color: 'red' },
                })
              ),
              React.createElement(
                'button',
                { type: 'submit' },
                'Register'
              )
            )
        )
      );
}

export default formikForm
