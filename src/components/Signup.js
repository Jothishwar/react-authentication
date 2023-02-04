import React from 'react';
import { useFormik } from "formik";

function Signup() {
	const formik = useFormik({
	    initialValues: {
	     firstname:"",
	     lastname:"",
	     email: "",
	     password:""
	     },
	    onSubmit: values => {
	      alert(JSON.stringify(values, null, 2));
	    }
	});
	return (
	    <form onSubmit={formik.handleSubmit}>
	      <label htmlFor="firstname">First Name</label>
	      <input
	        id="firstname"
	        name="firstname"
	        type="firstname"
	        onChange={formik.handleChange}
	        value={formik.values.firstname}
	      />
	      <label htmlFor="lastname">Last Name</label>
	      <input
	        id="lastname"
	        name="lastname"
	        type="lastname"
	        onChange={formik.handleChange}
	        value={formik.values.lastname}
	      />
	      <label htmlFor="email">Email Address</label>
	      <input
	        id="email"
	        name="email"
	        type="email"
	        onChange={formik.handleChange}
	        value={formik.values.email}
	      />
	      <label htmlFor="password">Password</label>
	      <input
	        id="password"
	        name="password"
	        type="password"
	        onChange={formik.handleChange}
	        value={formik.values.password}
	      />
	      <button type="submit">Submit</button>
	    </form>
	);
}

export default Signup;