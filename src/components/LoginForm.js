import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Link } from "react-router-dom";


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        formDisplay: true,
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return(
            <form onSubmit={event => this.props.handleLogin(event, this.state)}>
                <h4>LOG IN</h4>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
                <input className="input-btn" type="submit" />
                <p><Link className="register-link" to='/register'>Need to Create an Account?</Link></p>
            </form>
        )
    }
}

export default LoginForm;

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired
}