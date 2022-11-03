import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import AuthenticationService from './AuthenticationService.js'

export default class TodoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                {/* My Todo Application */}
                {/* <div> */}
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route exact path='*' element={< ErrorComponent />} />
                        <Route exact path='/' element={< LoginComponent />} />
                        <Route exact path='/login' element={< LoginComponent />} />
                        <Route exact path='/welcome' element={<AuthenticatedRoute>< WelcomeComponent /></AuthenticatedRoute>} />
                        <Route exact path='/todo' element={<AuthenticatedRoute>< TodoComponent /></AuthenticatedRoute>} />
                        <Route exact path='/logout' element={<AuthenticatedRoute>< LogoutComponent /></AuthenticatedRoute>} />
                    </Routes>
                    <FooterComponent />
                </Router>
                {/* <LoginComponent />
                    <WelcomeComponent/> */}
                {/* </div> */}
            </div>
        )
    }
}

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

class FooterComponent extends Component {
    render() {
        return (
            <footer className='footer'>
                <span className="text-muted">All Rights Reserved 2022 @todoApp</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1> You Are Logged Out.</h1>
                <div className='container'>
                    Thank You for using Our Application.
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>Welcome Gaurab,
                    Click <Link to={`/todo`}>here </Link> to manage Todos App.
                </div>
            </>
        )

    }
}

function ErrorComponent() {
    return (
        <div>Page Not Found</div>
    )
}


class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                    { id: 2, description: "Learn HTML", done: false, targetDate: new Date() },
                    { id: 3, description: "Learn CSS", done: false, targetDate: new Date() },
                    { id: 4, description: "Learn JS", done: false, targetDate: new Date() }
                ]
        }
    }
    render() {
        return (
            <div>
                <h1>List todos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                {/* <th>id</th> */}
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "gaurab",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    // showInvalidCredentials(props) {
    //     if (props.hasLoginFailed) {
    //         return <div>Invalid credentials</div>
    //     }
    //     else {
    //         return null
    //     }
    // }

    // showLoginSuccessMessage(props) {
    //     if (props.showSuccessMessage) {
    //         return <div>Login Successful</div>
    //     }
    //     else {
    //         return null
    //     }
    // }


    handleChange(event) {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }

    loginClicked() {
        // console.log(this.state);
        if (this.state.username === 'gaurab' && this.state.password === 'gaurab123') {
            // console.log("Login Successful");
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.setState({
                showSuccessMessage: true
            })

            this.setState({
                hasLoginFailed: false
            })
        }
        else {
            // console.log("Login failed");
            this.setState({
                showSuccessMessage: false
            })

            this.setState({
                hasLoginFailed: true
            })
        }

    }



    render() {
        return (
            <>
                <h1>Login</h1>
                <div className='container'>
                    {/* <this.showInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid credentials</div>}
                    {/* <this.showLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                    <button className='btn btn-success' onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }
}

