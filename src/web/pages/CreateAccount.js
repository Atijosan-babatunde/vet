import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { createAccount } from "../../services/users";

export default function CreateAccount({ history }) {

	const [loading, setLoading] = useState(false);
	const [loginData, setLoginData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
        phone:"",
		country:"",
		country_code:""
	});

	const handleChange = ({ target: { name, value } }) => {
		setLoginData({ ...loginData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		createAccount(loginData).then((re) => {
			console.log(re);
			if (re.status === "CREATED") {
				window && window.localStorage && window.localStorage.setItem("__v", re.payload.token)
				history.push("/verification/")
				return;
			}
		}).catch((err) => {
			console.log(err)
		}).finally(() => {
			setLoading(false);
		})
	};

	return (
		<div className="mainn" style={{ width: '100%', display: 'flex', background: '#fff' }}>
			<div className="side-image">
				
			</div>
			<div className="right">
				<div className="rightCap">
					<img src="img/Logotype.png" alt="" />

					<h2 className="mb-1">Let's get to know you </h2>
					<span className=" mb-1">Tell us about yourself</span>

					<div className="col-3 mt-1 mb-1">
						<img src="img/Group 3123.png" alt="" />
					</div>
					<form onSubmit={handleSubmit}>
					    <div className="input-group flex-nowrap mt-2">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                             <input type="firstName" placeholder="First Name" name="firstName" className="form-control1" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>
						
						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                             <input type="lastName" placeholder="Last Name" name="lastName" className="form-control1" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>
						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                             <input type="email" placeholder="Email Address" name="email" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>
						
						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-lock"></i></span>
                             <input type="password" placeholder="Password" name="password" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>

						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-phone"></i></span>
                             <input type="ten" placeholder="Phone Number" name="phone" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>
						

						
						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-phone"></i></span>
                             <input type="text" placeholder="country" name="country" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>

						
						<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-phone"></i></span>
                             <input type="text" placeholder="Country Code" name="country_code" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                        </div>
						
						<div className="row bottom">
							<div className="col-12">
								<div className="grow-button text-end">
									<button type="submit" className="grow" disabled={loading}>{
										loading ?
											<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Create account"
									}</button>
								</div>
							</div>
						</div>
					</form>
					<div >
						<p>Already have an Agent Account? <Link className="top-p1" to="/signup">Log In</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
}