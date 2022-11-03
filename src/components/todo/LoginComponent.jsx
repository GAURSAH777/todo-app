import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

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
export default LoginComponent