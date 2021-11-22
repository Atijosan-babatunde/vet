import React, { useState } from "react";
import { BaseContainer } from '../layouts/Containers';
import { Link } from 'react-router-dom';
import './inner.css';


export function Act() {
    return (
        <BaseContainer>
            <div className="top">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header">
                                <div className="nav">
                                    <div className="user text-end">
                                        <div className="mobilenav">
                                            <img src="img/bars-solid.svg" id="hamburger" alt="" className="bar" />
                                            <Link to="/" className="ogo">
                                                <img src="img/Logotype.png" alt="" className="" />
                                            </Link>
                                        </div>

                                        <img src="img/image2.png" alt="" className="noti" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row ">
                        <div class="mainTop">
                            <div class="ticket">
                                <h1>My Account</h1>

                            </div>

                        </div>
                        <div class="col-md-12 ro" style={{ width: '90%', margin: 'auto', padding: '2em' }}>
                            <div class="container roland">
                                <div class="row">
                                    <div class="">
                                        <div class="tab-pane mt-3 ms-2 " id="pills-verification" role="tabpanel"
                                            aria-labelledby="pills-verification-tab">
                                            <div class=" bg-white border-bottom  p-4">
                                                <ul class="nav nav-pills nav-fill mb-5" id="pills-tab" role="tablist">
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-personal-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-personal"
                                                            type="button" role="tab" aria-controls="pills-personal"
                                                            aria-selected="true">PERSONAL INFO</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-payment-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-payment"
                                                            type="button" role="tab" aria-controls="pills-payment"
                                                            aria-selected="false">PAYMENT METHOD</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-security-tab"
                                                            data-bs-toggle="pill" data-bs-target="#pills-security"
                                                            type="button" role="tab" aria-controls="pills-security"
                                                            aria-selected="false">SECURITY</button>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <button class="nav-link" id="pills-legal-tab" data-bs-toggle="pill"
                                                            data-bs-target="#pills-legal" type="button" role="tab"
                                                            aria-controls="pills-legal" aria-selected="false">LEGAL
                                                            AGREEMENT</button>
                                                    </li>
                                                </ul>



                                                <div class="tab-content" id="pills-tabContent" style={{ height: '400px' }}>
                                                    <div class="tab-pane mt-3 ms-2 fade show active" id="pills-personal"
                                                        role="tabpanel" aria-labelledby="pills-personal-tab">

                                                        <div class="container wex">


                                                            <div className="col-3 mt-1 mb-3">
                                                                <img src="img/Group 3123.png" alt="" />
                                                            </div>
                                                            <div class="row">

                                                                <div class="col-12">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">FIRST NAME</label>
                                                                            <div className="input-group flex-nowrap mt-2">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                                                                                <input type="firstName" placeholder="First Name" name="firstName" className="form-control1" aria-label="Username" aria-describedby="addon-wrapping" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">LAST NAME</label>

                                                                            <div className="input-group flex-nowrap">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-user"></i></span>
                                                                                <input type="lastName" placeholder="Last Name" name="lastName" className="form-control1" aria-label="Username" aria-describedby="addon-wrapping" />
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div class="row mt-4">
                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">EMAIL ADDRESS</label>

                                                                            <div className="input-group flex-nowrap">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-envelope"></i></span>
                                                                                <input type="email" placeholder="Email Address" name="email" className="form-control1" aria-describedby="addon-wrapping" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">PHONE NUMBER</label>

                                                                            <div className="input-group flex-nowrap">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-phone"></i></span>
                                                                                <input type="phoneNumber" placeholder="Enter Phone Number" name="phoneNumber" className="form-control1" aria-describedby="addon-wrapping" />
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <button class="thirdClick mt-3" type="button"><a href="/" class="button3">Update</a></button>
                                                                </div>


                                                            </div>
                                                        </div>













                                                    </div>



                                                    <div class="tab-pane mt-3 ms-2 fade " id="pills-payment" role="tabpanel"
                                                        aria-labelledby="pills-payment-tab">







                                                    </div>
                                                    <div class="tab-pane mt-3 ms-2 fade " id="pills-security"
                                                        role="tabpanel" aria-labelledby="pills-security-tab">

                                                        <div class="container wex">

                                                            <h3 className="sec mb-5">Security</h3>

                                                            <div class="row">

                                                                <div class="col-12">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">OLD PASSWORD</label>

                                                                            <div className="input-group flex-nowrap">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-lock"></i></span>
                                                                                <input type="password" placeholder="Enter Old Password" name="password" className="form-control1" aria-describedby="addon-wrapping" />
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-6">
                                                                            <label for="inputCardNumber" class="form-label">NEW PASSWORD</label>

                                                                            <div className="input-group flex-nowrap">
                                                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-lock"></i></span>
                                                                                <input type="password" placeholder="Enter New Password" name="password" className="form-control1" aria-describedby="addon-wrapping" />
                                                                            </div>


                                                                        </div>

                                                                        <div class="row mt-4">


                                                                            <div class="col-md-6">
                                                                                <label for="inputCardNumber" class="form-label">CONFIRM PASSWORD</label>

                                                                                <div className="input-group flex-nowrap">
                                                                                    <span className="input-group-text" id="addon-wrapping"><i className="far fa-lock"></i></span>
                                                                                    <input type="password" placeholder="Confirm New Password" name="password" className="form-control1" aria-describedby="addon-wrapping" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <button class="thirdClick mt-3" type="button"><a href="/" class="button3">Update</a></button>
                                                                </div>


                                                            </div>
                                                        </div>







                                                    </div>


                                                    <div class="tab-pane mt-3 ms-2 fade " id="pills-legal" role="tabpanel"
                                                        aria-labelledby="pills-legal-tab">








                                                    </div>




                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>






                        </div>
                    </div>









                </div>

            </div>
        </BaseContainer>
    )
}