import React, { Component } from 'react'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "gaurab",
            password: ""
        }

        this.handleusernameChange = this.handleusernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    handleusernameChange(event) {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event) {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name='username' value={this.state.username} onChange={this.handleusernameChange} />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.handlePasswordChange} />
                <button>Login</button>
            </div>
        )
    }
}
