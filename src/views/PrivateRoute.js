import React from 'react';
import Home from './Home';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {

    return <Route {...props} render={() => {
        return localStorage.token
        ? <Home 
        logged_in={props.logged_in}
        username={props.username}
        displayed_form={props.displayed_form}
        toggleLogin={props.toggleLogin}
        toggleNav={props.toggleNav}
        hideNav={props.hideNav}
        signUp={props.handleSignup} 
        logIn={props.handleLogn}
        />
        : <Redirect to='/login' />
    }}/>
}