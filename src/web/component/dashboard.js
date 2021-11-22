import React from 'react';
import { BaseContainer } from '../layouts/Containers';
import { Link } from 'react-router-dom';
import './style.css';



export function Dash() {

    const user = JSON.parse(window && window.localStorage && window.localStorage.getItem("user"));
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
                    <div class="row">
                        <div class="col-md-12" style={{ marginTop: '6.1em', paddingLeft: '3em', paddingRight: '3em', marginBottom: '1em' }}>

                            <div id="content" class="app-content">
                                <h1 class="page-header mb-2 mt-3">
                                    Hey there, <span>Micheal </span>
                                </h1>
                                <p>Here's a quick overview of what is going on</p>

                            </div>


                            <div class="min mt-3">

                                <div class="row">
                                    <div class="col-md-12 col-sm-6">
                                        <div class="row">
                                            <div class="card mb-2" style={{ border: 'none' }}>

                                                <div class="card-body">
                                                    <h2>BOOKING DETAILS</h2>
                                                    <div class="col-md-12">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <p>Your booking has been confirmed. You'll be able to download your
                                                                    ticket<br /> after your third payment</p>
                                                            </div>
                                                            <div class="col-md-4">
                                                                 {/* <button class="but" type="button"><a href="/" class="button3">Download Ticket</a></button> */}
                                                                <button class="thirdClick" type="button"><a href="/" class="button3">View
                                                                    Ticket</a></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="three">
                                <h3>EXPLORE</h3>
                                <div class="col-md-12 mt-2">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                            <div class="card mb-2" style={{ border: 'none' }}>
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <img src="img/in.png" alt="" />
                                                            <p class="small-card-para mt-3">Travel to Zanzibar This<br /> December</p>
                                                            <button class="thirdClick1" type="button"><a href="/" class="button3">Read More</a></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="card mb-2" style={{ border: 'none' }}>
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <img src="img/in.png" alt="" />
                                                            <p class="small-card-para mt-3">Travel to Zanzibar This<br /> December</p>
                                                            <button class="thirdClick1" type="button"><a href="/" class="button3">Read More</a></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6">
                                            <div class="card mb-2" style={{ border: 'none' }}>
                                                <div class="card-body">
                                                    <div class="d-flex">
                                                        <div class="flex-grow-1">
                                                            <img src="img/in.png" alt="" />
                                                            <p class="small-card-para mt-3">Travel to Zanzibar This<br /> December</p>
                                                            <button class="thirdClick1" type="button"><a href="/" class="button3">Read More</a></button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div class="tab-pane mt-3 ms-2 " id="pills-verification" role="tabpanel"
                                aria-labelledby="pills-verification-tab">
                                <div class="col-md-12 mt-2">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-6">
                                            <div class="card mt-4" style={{ border: 'none' }}>
                                                <div class="card-body">
                                                    <div class="">

                                                        <div class="dont">
                                                            <h3>PAYMENT SUMMARY</h3>
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <p class="top-head1 ">Repayment Period</p>
                                                                            <h3 class="p-top">12 Months</h3>
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <p class="top-head1">Total A mount Due</p>
                                                                            <h3 class="p-top">&#8358;120,000</h3>
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <p class="top-head1">Interest</p>
                                                                            <h3 class="p-top">2.5%</h3>
                                                                        </div>
                                                                        <div class="col-md-2">
                                                                            <p class="top-head1">Next Repayment</p>
                                                                            <h3 class="p-top">&#8358;120,000</h3>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                            <p class="top-head1">Next Repayment Date</p>
                                                                            <h3 class="p-top">26/03/2021</h3>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div class="ez-toc">

                                        <div class="" style={{ background: 'none' }}>
                                            <div class="row">
                                                <div class="col-md-6 mt-3">

                                                    <div class="card" style={{ width: '100%' }}>

                                                        <ul class="list-group list-group-flush">
                                                            <h3 class="yo">PAYMENT SUMMARY</h3>
                                                            <li class="list-group-item">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <p class="top-head1 ">Repayment Period</p>
                                                                        <h3 class="p-top">12 Months</h3>
                                                                    </div>
                                                                    <div class="col">
                                                                        <p class="top-head1">Next Repayment</p>
                                                                        <h3 class="p-top">&#8358;120,000</h3>
                                                                    </div>
                                                                </div>

                                                                <div class="row">
                                                                    <div class="col">
                                                                        <p class="top-head1">Next Repayment Date</p>
                                                                        <h3 class="p-top">26/03/2021</h3>
                                                                    </div>
                                                                    <div class="col ">
                                                                        <p class="top-head1 mt-3">INTEREST</p>
                                                                        <h3 class="p-top">2.5%</h3>
                                                                    </div>
                                                                </div>


                                                                <div class="row">
                                                                    <div class="col">
                                                                        <p class="top-head1">Total A mount Due</p>
                                                                        <h3 class="p-top">&#8358;120,000</h3>

                                                                    </div>

                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                    <div class="card mt-4">

                                        <div class="">
                                            <div class="tab-pane  ms-2 " id="pills-verification" role="tabpanel"
                                                aria-labelledby="pills-verification-tab">
                                                <div class=" bg-white border-bottom  p-4">
                                                    <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-active-tab" data-bs-toggle="pill" data-bs-target="#pills-active"
                                                                type="button" role="tab" aria-controls="pills-active" aria-selected="true">ACTIVE TRIPS</button>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <button class="nav-link" id="pills-paid-tab" data-bs-toggle="pill" data-bs-target="#pills-paid"
                                                                type="button" role="tab" aria-controls="pills-paid" aria-selected="false">PAID TRIPS</button>
                                                        </li>
                                                    </ul>

                                                    <div class="tab-content" id="pills-tabContent" style={{ height: '400px' }}>
                                                        <div class="tab-pane mt-3 ms-2 fade show active" id="pills-active" role="tabpanel"
                                                            aria-labelledby="pills-active-tab">
                                                            <div class="card-body">
                                                                <div id="flip-scroll">
                                                                    <table
                                                                        id="datatableDefault"
                                                                        class="table text-nowrap w-200"
                                                                    >


                                                                        <thead >
                                                                            <tr class="table" style={{ background: '#f1f2f4' }}>
                                                                                <th width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </th>
                                                                                <th class="payment-inner-p" width="10%">DATE</th>
                                                                                <th class="payment-inner-p" width="12%">
                                                                                    DESCRIPTION
                                                                                </th>
                                                                                <th class="payment-inner-p" width="13%">
                                                                                    LOAN AMOUNT
                                                                                </th>
                                                                                <th class="payment-inner-p" width="10%">REPAYMENT AMOUNT</th>
                                                                                <th class="payment-inner-p" width="8%">INTEREST RATE</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>

                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td width="1%">
                                                                                    <input
                                                                                        class="form-check-input"
                                                                                        type="checkbox"
                                                                                        value=""
                                                                                        id="defaultCheck1"
                                                                                        disabled
                                                                                    />
                                                                                </td>
                                                                                <td class="payment-month">6 Jan 2021</td>
                                                                                <td class="payment-month">Travel Loan</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">NGN 500,000</td>
                                                                                <td class="payment-month">2.5%</td>

                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div class="pages">
                                                                    <p class="down">row per page 10</p>
                                                                    <p class="down">1-10 of 276</p>
                                                                    <div class="pagebutton">
                                                                        <i class="fa fa-chevron-left"></i>
                                                                        <i class="fa fa-chevron-right"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="tab-pane mt-3 ms-2 fade" id="pills-paid" role="tabpanel" aria-labelledby="pills-paid-tab"></div>
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