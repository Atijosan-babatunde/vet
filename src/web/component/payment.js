import React from 'react';
import { BaseContainer } from '../layouts/Containers';
import { Link } from 'react-router-dom';
import './inner.css';


export function Pay(){
    return(
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
                    <div class="col-md-12"
                        style={{marginTop: '6.1em', paddingLeft: '3em', paddingRight: '3em', marginBottom: '1em'}}>

                        <div id="content" class="app-content">
                            <h1 class="page-header mb-2 mt-3">
                                Payment Schedule
                            </h1>
                            <p>Here's a quick overview of what is going on</p>

                        </div>


                        








                        <div class="tab-pane  ms-2 " id="pills-verification" role="tabpanel"
                            aria-labelledby="pills-verification-tab">
                            <div class="col-md-12 ">
                                <div class="row">
                                    <div class="col-md-12 col-sm-6">
                                        <div class="card mt-4" style={{border: 'none'}}>
                                            <div class="card-body">
                                                <div class="">

                                                    <div class="dont">
                                                        <h3>ALL LOANS</h3>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">
                                                                <div class="row">
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1 ">Trip Deals</p>
                                                                        <h3 class="p-top">Premium</h3>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1">Marchant</p>
                                                                        <h3 class="p-top">Wakanow</h3>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1">Loan Amount</p>
                                                                        <h3 class="p-top">&#8358;120,000</h3>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1">Amount Paid</p>
                                                                        <h3 class="p-top">&#8358;120,000</h3>
                                                                    </div>
                                                                    <div class="col-md-3">
                                                                        <p class="top-head1">Balance Due</p>
                                                                        <h3 class="p-top">&#8358;120,000</h3>
                                                                    </div>
                                                                </div>
                                                                <div class="row mt-4">
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1 ">Loan Status</p>
                                                                        <h3 class="p-top">Open</h3>
                                                                    </div>
                                                                    <div class="col-md-2">
                                                                        <p class="top-head1">Interest</p>
                                                                        <h3 class="p-top">2.5%</h3>
                                                                    </div>
                                                                    <div class="col-md-6 mt-3 " style={{marginLeft:'4em'}}>
                                                                        <button class="thirdClick3 text-end" type="button"><a href="/" class="button3">Pay Balance</a></button>
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

                                    <div class="" style={{background:'none'}}>
                                        <div class="row">
                                            <div class="col-md-6 mt-3">

                                                <div class="card" style={{width: '100%'}}>

                                                    <ul class="list-group list-group-flush">
                                                        <h3 class="yo">PAYMENT SUMMARY</h3>
                                                        <li class="list-group-item">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <p class="top-head1 ">Repayment Period</p>
                                                                    <h3 class="p-top">12 Months</h3>
                                                                </div>
                                                                <div class="col">
                                                                    <p class="top-head1">Marchant</p>
                                                                        <h3 class="p-top">Wakanow</h3>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col">
                                                                    <p class="top-head1">Loan Amount</p>
                                                                    <h3 class="p-top">&#8358;120,000</h3>
                                                                </div>
                                                                <div class="col">
                                                                    <p class="top-head1">Amount Paid</p>
                                                                    <h3 class="p-top">&#8358;120,000</h3>
                                                                </div>
                                                            </div>


                                                            <div class="row">
                                                                <div class="col">
                                                                    <p class="top-head1 ">Loan Status</p>
                                                                    <h3 class="p-top">Open</h3>

                                                                </div>
                                                                <div class="col">
                                                                    <p class="top-head1">Interest</p>
                                                                    <h3 class="p-top">2.5%</h3>
                                                                </div>
                                                            </div>
                                                            <div class="row justify-content-center text-center mt-3">
                                                                <div class="col">
                                                                    <button class="thirdClick3 text-center" type="button"><a href="/" class="button3">Pay Balance</a></button>

                                                                </div>
                                                                
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>







                                <div class="card">
                                    <h1 class="card-header  mb-2 mt-2" Style={{background: 'none'}}>PAYMENT SCHEDULE
                                    </h1>
                                    <div class="card-body">
                                        <div id="flip-scroll">
                                            <table id="datatableDefault" class="table text-nowrap w-200">


                                                <thead>
                                                    <tr class="table" style={{background: '#f1f2f4'}}>
                                                        <th width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
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
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>

                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
                                                        </td>
                                                        <td class="payment-month">6 Jan 2021</td>
                                                        <td class="payment-month">Travel Loan</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">NGN 500,000</td>
                                                        <td class="payment-month">2.5%</td>

                                                    </tr>
                                                    <tr>
                                                        <td width="1%">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="defaultCheck1" disabled />
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
                    </div>
                </div>
            </div>
        </div>
        
</div>
        </BaseContainer>
    )
}