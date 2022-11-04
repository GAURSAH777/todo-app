import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.retriveWelcome = this.retriveWelcome.bind(this)
    }

    retriveWelcome(){
        console.log('retrive')
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
            </>
        )

    }
}
export default WelcomeComponent