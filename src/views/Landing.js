import React, {Component } from 'react';
import Nav from "../components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../App.scss';
import Home from "./Home";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

class Landing extends Component {

    state = {
        logged_in: localStorage.getItem('token') ? true : false,
        username: '',
        displayed_form: '',
    }

    displayForm = form => {
        this.setState({displayed_form: form})
      }

    handleLogin = (event, data) => {
        event.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then((result) => {
            localStorage.setItem('token', result.token);
            console.log("json", result)
            this.setState({
            logged_in: true,
            displayed_form: '',
            username: result.username
            })
        })
    }

    handleSignup = (event, data) => {
        event.preventDefault();
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
          localStorage.setItem('token', json.token);
          this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
          })
        })
      }

      handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' })
      }
    
    render() {
        let form;
        switch (this.state.displayed_form) {
        case 'login':
            form = <LoginForm handleLogin={this.handleLogin} />
            break;
        case 'signup':
            form = <SignupForm handleSignup={this.handleSignup} />
            break;
        default:
            form = null;
        }

        return(
            <>
            <div className='blog-header'>
                <h1 className='text-center'>
                    <Nav 
                    logged_in={this.state.logged_in}
                    displayForm={this.displayForm}
                    handleLogout={this.handleLogout}
                    />
                    {/* <Sidebar /> */}
                </h1>
            </div>
            {this.state.logged_in
            ? <Route component={Home} /> 
            : {form}
            }
            </>
        )
    }

}

export default Landing;