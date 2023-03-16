import React from 'react';
import LoginForm from './LoginForm';
import Navigation from './Navigation';

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <LoginForm />
            </div>
        );
    }
}