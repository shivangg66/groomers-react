import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    render() {
        return <div className="login">
            <form>
                <label htmlFor="Email/Mobile">Email/Mobile: </label>
                <input id="Email/Mobile" type="text" /><span></span>
                <label htmlFor="Password">Password: </label>
                <input id="Password" type="text" /><span></span>
                <input type="button" value="Login" />.
            </form>
        </div>;
    }
}
export default Login;