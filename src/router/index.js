import React from 'react';
import { Route, Switch, Router,Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { fetchCookie, removeCookie } from '../helpers/cookie';
import * as Pages from '../web/pages';



function Approuter() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Switch>
                <Route pathRedirect={'/dashboard/'} path='/signup' component={Pages.Authenticate} />
                <Route pathRedirect={'/dashboard/'} path='/signup/' exact component={Pages.Authenticate} />
                <Route pathRedirect={'/dashboard/'} path='/forgetpass/' exact component={Pages.ForgetPass} />
                <Route pathRedirect={'/dashboard/'} path='/newpass/' exact component={Pages.NewPass} />
                <Route pathRedirect={'/dashboard/'} path='/createaccount/' exact component={Pages.CreateAccount} />
                <Route pathRedirect={'/dashboard/'} path='/verification/' exact component={Pages.Verification} />


               <Route exact path ='/' component={Pages.Landing}/>
               <Route path ='/travel/' exact component ={Pages.Travel}/>
               <Route path ='/dashboard/' exact component ={Pages.Dashboard}/>
               <Route path ='/payment/' exact component ={Pages.Payment}/>
               <Route path ='/account/' exact component ={Pages.Account}/>
            </Switch>
        </Router>
    )
}


const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = {
        isAuthenticated: fetchCookie('token') ? true : false,
    }

    if (auth.isAuthenticated && auth.isAuthorized === 'false') removeCookie('token')
    return (
        <Route {...rest} render=
            {props => auth.isAuthenticated ?
                (<Component {...props} />) :
                (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)
            }
        />
    );
}

const SessionRoute = ({ component: Component, session, ...rest }) => {
    const auth = {
        isAuthenticated: fetchCookie('token') ? true : false,
    }
    console.log("Session: ", auth)
    return (
        <Route {...rest} render=
            {props => auth.isAuthenticated ?
                (<Redirect to={{ pathname: rest.pathRedirect, state: { from: props.location } }} />) :
                (<Component {...props} />)
            }
        />
    );
}

export default Approuter


