import React, { useState } from "react";
import { useHistory } from "react-router";

import { Link} from 'react-router-dom';




export function ForgetPassBody(){
   const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch.post("https://thawing-shore-17752.herokuapp.com/api/signin", loginData)
    .then((res) => {
      window.localStorage.setItem("token", res.data);
      history.push("/dashboard");
  }).catch((error) => {
    console.log(error)
  })
  };
    return(
        <div class="mainn" style={{width: '100%', display: 'flex', background:'#fff'}}>
        <div class="side-image"></div>
        <div class="right">
          <div class="rightCap">
            <img src="img/Logotype.png" alt=""/>

            <h2>Great to see you back </h2>
            <span>Please sign in to continue</span>
           <form onSubmit={handleSubmit}>
              	<div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                             <input type="email" placeholder="Email Address" name="email" className="form-control1"  aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
               <button className="grow"><Link className="white" to="/newpass">Reset </Link></button>
            </form>
          </div>
        </div>
      </div>
    )
}