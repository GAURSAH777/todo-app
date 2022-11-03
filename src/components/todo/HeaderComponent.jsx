import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // console.log(isUserLoggedIn);
        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='http://www.in28minutes.com' className='navbar-brand'>in28minutes</a></div>
                    <ul className='narbar-nav'>
                        {isUserLoggedIn && <li ><Link className='nav-link' to={`/welcome`} style={{ color: "white" }}>Home</Link></li>}
                        {isUserLoggedIn && <li ><Link className='nav-link' to={`/todo`} style={{ color: "white" }}>Todos</Link></li>}
                    </ul>
                    <ul className='narbar-nav navbar-collapse justify-content-end'>
                        {!isUserLoggedIn && <li ><Link className='nav-link' to={`/login`} style={{ color: "white", position: 'sticky' }}>Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className='nav-link' to={`/logout`} style={{ color: "white", position: 'sticky' }} onClick={AuthenticationService.logout}>LogOut</Link></li>}
                    </ul>
                </nav>
            </header>
            // <div>
            //     Header<hr />
            // </div>
        )
    }
}
export default HeaderComponent