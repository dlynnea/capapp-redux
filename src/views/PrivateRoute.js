import React from 'react';
import Home from './Home';
import { BrowserRouter as Route, Redirect } from "react-router-dom";

import fetchArticles from "../actions/fetchArticles";
import {getArticles, getArticlesPending, getArticlesError } from "../store/reducers";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

export default function PrivateRoute(props) {
    console.log("hey")
    // return <Route path='/home' render={(props) => {
        return(
            <Home 
                logged_in={props.logged_in}
                username={props.username}
                displayed_form={props.displayed_form}
                toggleLogin={props.toggleLogin}
                toggleNav={props.toggleNav}
                hideNav={props.hideNav}
                signUp={props.handleSignup} 
                logIn={props.handleLogn}
            />
        )

            // : <Redirect to='/login' /> 
}