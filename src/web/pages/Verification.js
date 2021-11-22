import React, { useEffect, useState } from "react";
import { verifyOTP } from "../../services/auth";
import { Link } from 'react-router-dom';
import { addCookie } from "../../helpers/cookie";


export default function Verification({ history }) {
	const [loading, setLoading] = useState(false);

	const token = window && window.localStorage && window.localStorage.getItem("__v");
	console.log(token)
	useEffect(() => {
		var container = document.getElementsByClassName("container")[0];
		container.onkeyup = function (e) {
			var target = e.srcElement;
			var maxLength = parseInt(target.attributes["maxlength"].value, 10);
			var myLength = target.value.length;
			if (myLength >= maxLength) {
				var next = target;
				//TODO: Handle Backspace

				while ((next = next.nextElementSibling)) {
					if (next == null)
						break;
					if (next.tagName.toLowerCase() === "input") {
						next.focus();
						break;
					}
				}
			}
		}

		return (() => {
			container.onkeyup = null;
		})
	}, []);

	const submit = () => {
		const code = Array.prototype.map.call(document.getElementsByClassName("take"), (e) => e.value).join("");
		setLoading(true);
		verifyOTP({
			code: parseInt(code, 10),
			token: window.localStorage.getItem("__v")
		}).then((e) => {
			console.log(e)
			if (e.status === "OK") {
				const { token } = e.payload;
				addCookie("token", token);
				window && window.localStorage && window.localStorage.setItem("user", JSON.stringify(e.payload.user))
				history.push("/dashboard/")
				return;
			}
		}).catch((err) => {
			console.log(err);
		}).finally(() => {
			setLoading(false);
		})
	}



	if (!token) {
		history.push("/");
		return;
	}

	return (
		<div className="mainn" style={{ width: '100%', display: 'flex', background: '#ffffff' }}>
			<div className="side-image"></div>
			<div className="right">
				<div className="rightCap">
					<img src="img/Logotype.png" alt="" />

					<div className="tab-pane mt-0 ms-2 " id="pills-verification" role="tabpanel"
						aria-labelledby="pills-verification-tab">

						<div className="container">
							<h4 className="top-head2 " style={{ marginTop: '2em' }}>OTP Verification</h4>
							<p className="p-top mt-4 ">Please enter the code sent to +234 555 5678</p>

							<div className="row mt-3">
								<div className="userInput1">
									<div className="">
										<div className="pass col-12">
											<input className="take" type="text" maxlength="1" />
											<input className="take" type="text" maxlength="1" />
											<input className="take" type="text" maxlength="1" />
											<input className="take" type="text" maxlength="1" />
											<input className="take" type="text" maxlength="1" />
											<input className="take" type="text" maxlength="1" />
										</div>
									</div>
								</div>
								<div className=" text-center mt-4">
									<button type="button" className="btn prevme btn-outline-orange"><Link to="/" className="col-but"><img src="img/roundd.png" alt="" style={{ marginRight: '4px' }} />Resend Code</Link></button>
									<button className="btn btn-orange nexttab" onClick={submit} disabled={loading} type="button">
										{
											loading ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Continue"
										}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}