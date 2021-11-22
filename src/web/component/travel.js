import React from 'react';

import { Link } from 'react-router-dom';




export function SecondPage() {
    return (
        
            <header>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container">
                    <Link class="navbar-brand" to="/"><img src="img/Logotype.png" alt="goflex"/></Link>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gomerchants">Go Merchants</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/goagents">Go Agents</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/golenders">Go Lenders</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/gomembers">Go Members</Link>
                            </li>
                        </ul>
                        <div class="holder">
                            <button class="firstClick"><Link to="/" class="button1">Log In</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
       


       

        

    )
};

export function Section1(){
    return(
        <section>
        <div class="container-fluid">
            <div class="row">
                <div class="hero">
                    <div class="col-md-12">
                        <div class="hero-img">
                            <div class="hero-words">
                                <h1 class="inner-hero-head ">Mid-season sale is on!</h1>
                             
                                <p class="inner-hero-para">Special deals until August 31st</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};
export function Section3(){
    return(
        <section>
        <div class="container" >
            <div class="col-md-12">
                <div class="row">
                    <h2 class="trend justify-content-center text-center mt-4 mb-4">Trending Now</h2>
                    <div class="col-md-6 mt-3">

                        <div class="card">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>


                        <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>

                        <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>

                        <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>
                    </div>


                    <div class="col-md-6 mt-3">
                       <div class="card">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>

                          <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>


                         <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>


                         <div class="card mt-4">
                            
                            <ul class="list-group list-group-flush">
                                
                                <li class="list-group-item" style={{width:'100%'}}>
                                    <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-6">
                                            <img src="img/pexels-andrea-piacquadio-3762927 (1) 1.png" alt=""/>
                                        </div>
                                        <div class="col-6">
                                            
                                            <img src="img/sod.png" class="top-end text-end"  alt=""/>
                                            <h2 class="inside-h">Travel to Zanzibar<br/> This December</h2>
                                            <p class="inside-p">lorem is traveling this dec DA9i jjjjnn<br/>into 
                                            the nedjjfjfjsknjgkd jkdcj  ccidjnjfnwji<br/> efbiub iubub biuivvknvv</p>
                                            
                                            <div class="col-md-12">
                                               <div class="row">
                                                  <div class="col-6">
                                                    <h3 class="inside-amount">&#8358;300,000</h3>
                                                  </div>
                                                  <div class="col-6">
                                                     <button  type="submit" class="grow"><a class="top-p2" href="#">Read More</a></button>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                </li>




                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export function Footer(){
    return(
        <footer id="footer-down">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-5">
                    
                    <div class="row">
                        <div class="col-md-3">
                            <div class="footer-image">
                                <img src="img/Group (3).png" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h2 class="footer-head">Account</h2>
                            <p class="footer-inner-p">For Members</p>
                            <p class="footer-inner-p">For Agents</p>
                            <p class="footer-inner-p">For Lenders</p>
                            <p class="footer-inner-p">For Merchants</p>
                        </div>
                        <div class="col-md-3">
                            <h2 class="footer-head">Additional Pages</h2>
                            <p class="footer-inner-p">Contact Us</p>
                            <p class="footer-inner-p">Legal</p>
                            <p class="footer-inner-p">Press</p>
                            <p class="footer-inner-p">Privacy Policy</p>
                        </div>
                        <div class="col-md-3">
                            <h2 class="footer-head">Keep in touch</h2>
                            <p class="footer-inner-p">Don't miss out on update, join our email list</p>
                           
                        </div>
                    </div>
                </div>
               
            </div>
          
        </div>
    </footer>
    )
}