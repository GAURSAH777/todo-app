import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retriveWelcome = this.retriveWelcome.bind(this)
        this.state = {
            welcomeMessage: ''
        }

        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }

    retriveWelcome() {
        // console.log('retrive')
        HelloWorldService.executeHelloWorldService().then(
            response => this.handleSuccessfulResponse(response)
        )
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data
        })
    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className='container'>Welcome Gaurab,
                    Click <Link to={`/todo`}>here </Link> to manage Todos App.
                </div>
                <div className='container'>
                    Click Here to retrive customized welcome message.
                    <button onClick={this.retriveWelcome} className='btn btn-success'>Message</button>
                </div>
                <div className='container'>
                    {this.state.welcomeMessage}
                </div>
            </>
        )

    }
}
export default WelcomeComponent