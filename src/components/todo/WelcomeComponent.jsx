import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
export default WelcomeComponent