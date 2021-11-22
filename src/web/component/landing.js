import React from 'react';

import { Link } from 'react-router-dom';




export function FirstPage() {
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
                            <button class="firstClick"><Link to="/signup" class="button1">Log In</Link></button>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
       


       

        

    )
};

export function View1(){
    return(
        <div class="container" style={{marginTop:'12em'}}>
<div class="col-12 view">
    <div class="row">

        <div class="col-md-6" style={{marginTop:'6em'}}>
            <h1>TRAVEL FUNDS SHOULDN'T BE A PROBLEM</h1>
            <h2>Finance Your Trips<br />
                <p>With <span class="span1">Go</span><span class="span2">Flex</span></p>
            </h2>
            <p class="too">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> a sequi
                excepturi
                tempore, minima nobis, sed delectus voluptatibus<br /> reiciendis similique eligendi dish it
                tooollgh </p>
            <div class="">
                <button type="button" class="secondClick m-2"><a href="/travel" class="button2">Learn
                        More</a></button>

                <button class="thirdClick" type="button"><a href="/signup" class="button3">Become An
                        Agent</a></button>
            </div>
        </div>
        <div class="col-md-6">
            <img src="img/Group 367 1.png" alt="" class="side"/>
        </div>
    </div>

</div>
</div> 
    )
};

export function View2(){
    return(
 <div class="container" style={{marginTop:'8em'}}>
<div class="col-12 view">
    <div class="row">

        <div class="col-md-6">
            <img src="img/Group 369 1.png" alt="" class="side"/>
        </div>

        <div class="col-md-6" style={{marginTop:'6em'}}>
            <h1>FOR MERCHANTS</h1>
            <h2>Finance Your Trips<br />
                <p>With <span class="span1">Go</span><span class="span2">Flex</span></p>
            </h2>
            <p class="too">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> a sequi
                excepturi
                tempore, minima nobis, sed delectus voluptatibus<br /> reiciendis similique eligendi dish it
                tooollgh </p>
            <div class="">
            

                <button class="thirdClick" type="button"><a href="/" class="button3">Get Started</a></button>
            </div>
        </div>
       
    </div>

</div>
</div>

)
};

export function View3(){
    return(
<div class="container" style={{marginTop:'8em'}}>
<div class="col-12 view">
    <div class="row">

       

        <div class="col-md-6" style={{marginTop:'6em'}}>
            <h1>FOR AGENTS</h1>
            <h2>Finance Your Trips<br />
                <p>With <span class="span1">Go</span><span class="span2">Flex</span></p>
            </h2>
            <p class="too">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> a sequi
                excepturi
                tempore, minima nobis, sed delectus voluptatibus<br /> reiciendis similique eligendi dish it
                tooollgh </p>
            <div class="">
               

                <button class="thirdClick" type="button"><a href="/" class="button3">Get Started</a></button>
            </div>
        </div>

        <div class="col-md-6">
            <img src="img/Group 370 1.png" alt="" class="side"/>
        </div>
       
    </div>

</div>
</div>
    )
};


export function View4(){
    return(
<div class="container" style={{marginTop:'8em'}}>
<div class="col-12 view">
    <div class="row">
        <div class="col-md-6">
            <img src="img/Group 371 1.png" alt="" class="side"/>
        </div>
       

        <div class="col-md-6" style={{marginTop:'6em'}}>
            <h1>FOR LENDERS</h1>
            <h2>Finance Your Trips<br />
                <p>With <span class="span1">Go</span><span class="span2">Flex</span></p>
            </h2>
            <p class="too">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> a sequi
                excepturi
                tempore, minima nobis, sed delectus voluptatibus<br /> reiciendis similique eligendi dish it
                tooollgh </p>
            <div class="">
               

                <button class="thirdClick" type="button"><a href="/" class="button3">Get Started</a></button>
            </div>
        </div>

       
       
    </div>

</div>
</div>
    )
};

export function View5(){
    return(

<div class="container" style={{marginTop:'6em'}}>
<div class="col-12 view">
    <div class="row">
        
       

        <div class="col-md-6" style={{marginTop:'6em'}}>
            <h1>FOR MEMBERS</h1>
            <h2>Finance Your Trips<br />
                <p>With <span class="span1">Go</span><span class="span2">Flex</span></p>
            </h2>
            <p class="too">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br /> a sequi
                excepturi
                tempore, minima nobis, sed delectus voluptatibus<br /> reiciendis similique eligendi dish it
                tooollgh </p>
            <div class="">
               

                <button class="thirdClick" type="button"><a href="/" class="button3">Get Started</a></button>
            </div>
        </div>
        <div class="col-md-6">
            <img src="img/Group 368 1.png" alt="" class="side"/>
        </div>
       
       
    </div>

</div>
</div>


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