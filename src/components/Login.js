import React from 'react';
import { Formik, Form, Field } from 'formik';
import './login.css';

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className='loginpage'>
          	<div className='form_header'>
          		<h2 className="text-center mb-4">Login</h2>
          	</div>
          	<div className='form_body'>
	            <div className="form-group">
	              <label htmlFor="email">Email</label>
	              <Field
	                name="email"
	                type="email"
	                className={`form-control ${
	                  touched.email && errors.email ? 'is-invalid' : ''
	                }`}
	              />
	              {touched.email && errors.email && (
	                <div className="invalid-feedback">{errors.email}</div>
	              )}
	            </div>
	            <div className="form-group">
	              <label htmlFor="password">Password</label>
	              <Field
	                name="password"
	                type="password"
	                className={`form-control ${
	                  touched.password && errors.password ? 'is-invalid' : ''
	                }`}
	              />
	              {touched.password && errors.password && (
	                <div className="invalid-feedback">{errors.password}</div>
	              )}
	            </div>
            </div>
            <div className='form-footer'>
	            <button type="submit" className="btn btn-primary">
	              Submit
	            </button>
	            <p>Don't have an Account <a href="#">Sign up</a></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
