import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                {/* My Todo Application */}
                {/* <div> */}
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route exact path='*' element={< ErrorComponent />} />
                        <Route exact path='/login' element={< LoginComponent />} />
                        <Route exact path='/welcome' element={< WelcomeComponent />} />
                        <Route exact path='/todo' element={< TodoComponent />} />
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
        return (
            <div>
                Header<hr />
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr /> Footer
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>Welcome Gaurab,
                Click <Link to={`/todo`}>here </Link> to manage Todos App.
            </div>
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
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
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
            <div>
                {/* <this.showInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Invalid credentials</div>}
                {/* <this.showLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

