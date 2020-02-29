import React from 'react'
import Nav from './Nav'

export const Header = (props) => {
    return(
        <header>
            {/* <h1>
                {props.logged_in || localStorage.token 
                    ? <button onClick={props.toggleNav} className="nav"></button> 
                    : null
                }
            </h1> */}
            <Nav 
                handleLogout={props.handleLogout}
                handleSignup={props.handleSignup}
                handleLogin={props.handleLogin}
                displayForm={props.displayForm}
                logged_in={props.logged_in}
            />
        </header>
    )
}