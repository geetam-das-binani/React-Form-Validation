import React, { useRef } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirm_password: "",
};

function App() {
  // using formik to handle form
	const { errors,values,touched, handleBlur, handleChange, handleSubmit,resetForm} =	useFormik({
			initialValues: initialValues,
			validationSchema: signUpSchema,
			onSubmit:() => {
       resetForm()
			},
		});

    return (
		<>
			<div className="wrapper">
				<div className="container">
					<div className="title">
						<h2>Choice Trip</h2>
					</div>
					<form className="my_form" onSubmit={handleSubmit}>
						<div className="name_div">
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter your name"
								autoComplete="off"
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.name && touched.name ? (
								<p className="error">{errors.name}</p>
							) : null}
						</div>
						<div className="email_div">
							<label htmlFor="emali">Email:</label>
							<input
								type="email"
								name="email"
								id="emali"
								placeholder="Enter your email"
								autoComplete="off"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && touched.email ? (
								<p className="error">{errors.email}</p>
							) : null}
						</div>
						<div className="password_div">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Enter your password"
								autoComplete="off"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && touched.password ? (
								<p className="error">{errors.password}</p>
							) : null}
						</div>
						<div className="confirm_password_div">
							<label htmlFor="confirm_password">Confirm Password:</label>
							<input
								type="password"
								name="confirm_password"
								id="confirm_password"
								placeholder="Re-type password"
								autoComplete="off"
								value={values.confirm_password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.confirm_password && touched.confirm_password ? (
								<p className="error">{errors.confirm_password}</p>
							) : null}
						</div>
						<div className="submit-btn">
							<button type="submit" className="btn btn-success">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
