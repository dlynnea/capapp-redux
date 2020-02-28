import React from 'react'
// import {Nav} from './Nav'

export const Header = (props) => {
    return(
        <div className='blog-header'>
        <h1 className='text-center'>
            {props.logged_in || localStorage.token 
            ? <button onClick={props.toggleNav} className="nav"></button> 
            : null}
        </h1>
        </div>
    )
}