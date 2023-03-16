import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container" id='logForm'>
                
                <div class="login-page">
                <h1>LOGIN</h1>
                    <div class="form">
                        <form class="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        </form>
                    </div>
                    </div>
            </div>
        )
    }
}