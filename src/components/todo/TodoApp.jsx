import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import TodoComponent from './TodoComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';

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