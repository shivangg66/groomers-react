import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';

import './Modal.css'
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = { login: true };
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton(e) {
        e.preventDefault();
        let value = e.target.name === 'login';
        this.setState(state => ({ login: value }));
    }



    render() {
        return <div className="modal">
            <div className="buttonHeading">
                <input type="button" className="button" name="login" value="Login" onClick={this.handleButton} />
                <input type="button" className="button" value="Signup" onClick={this.handleButton} />
                <Link to='/'><span className="close" onClick={this.goBack}>&times;</span></Link>

            </div>
            {this.state.login ? <Login /> : <Signup />}
        </div >
    }
}
export default Modal;