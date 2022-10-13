import React, { Component } from 'react'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                My Todo Application
                <div>
                    <LoginComponent />
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
            password: ""
        }

        // this.handleusernameChange = this.handleusernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }

    // handleusernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    handleChange(event) {
        console.log(event.target.name);
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name='username' value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </div>
        )
    }
}
