import React, { Component } from 'react';
import './Signup.css';
class Signup extends Component {
    render() {
        return <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" /><span></span>
                <label htmlFor="mobile">Phone No.: </label>
                <input id="mobile" type="text" /><span></span>
                <label htmlFor="dob">Date of Birth: </label>
                <input id="dob" type="date" /><span></span>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" /><span></span>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" /><span></span>
                <input type="button" value="Sign Up" />
            </form>
        </div>;
    }
}
export default Signup;