import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { obtainAuthToken } from '../../services/auth';

export default function Authenticate() {
	const [loading, setLoading] = useState(false);
	const [loginData, setLoginData] = useState({
		email: "",
		password: ""
	});

	const handleChange = ({ target: { name, value } }) => {
		setLoginData({ ...loginData, [name]: value });
		console.log(loginData)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		obtainAuthToken(loginData).then((re) => {
			console.log(re)
			// cogoToast.error(re.message, { position: "top-right", hideAfter: 5 })
		}).catch((er) => {
			console.log(er)
		}).finally(() => {
			setLoading(false);
		})
	};
	return (
		<div className="form-modal">
			<div id="login-form">
				<div class="mainn" style={{ width: '100%', display: 'flex', background: '#fff' }}>
					<div class="side-image"></div>
					<div class="right">
						<div class="rightCap">
							<img src="img/Logotype.png" alt="" />
							<h2 class="mb-1">Great to see you back </h2>
							<span class=" mb-0">Please sign in to continue</span>
							<form onSubmit={handleSubmit}>

							 	<div className="input-group flex-nowrap mt-3">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                             <input type="email" placeholder="Email Address" name="email" className="form-control1"  aria-describedby="addon-wrapping"  value={loginData.email} onChange={handleChange} required/>
                        </div>
							
								<div className="input-group flex-nowrap mt-3">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-lock"></i></span>
                             <input type="password" placeholder="Password" name="password" className="form-control1"  aria-describedby="addon-wrapping" value={loginData.email} onChange={handleChange}/>
                        </div>

								<div class="row bottom">
									<div class="col-6">
										<div class="grow-button text-center ">
											<button type="submit" class="grow" disabled={loading}>
												{loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Login"}
											</button>
										</div>
									</div>

									<div class="col-6 text-end tot mt-4"><Link class="top-p1" to="/forgetpass">Forgot password ?</Link></div>
								</div>
							</form>
							<div style={{ marginTop: '7em' }}>
								<p>Don't have an Agent Account?<Link to="/createaccount"> <span className="top-p1">Create One Now</span></Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}