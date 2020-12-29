import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: "", errors: {}, fields: {} };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }
    render() {
        return <div className="login">
            <form>
                <label htmlFor="Email/Mobile">Email/Mobile: </label>
                <input id="Email/Mobile" name="id" type="text" onChange={this.handleChange} /><span style={{ color: "red" }}>{this.state.errors["id"]}</span><span></span>
                <label htmlFor="Password">Password: </label>
                <input id="Password" name="password" type="text" onChange={this.handleChange} /><span style={{ color: "red" }}>{this.state.errors["password"]}</span><span></span>
                <input type="button" value="Login" onClick={this.handleLogin} />
                <span>{this.state.msg}</span>
            </form>
        </div>;
    }
    async handleLogin(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            let res = await axios.post(`${process.env.MONGO_URL}//user/signup`, this.state.fields);
            if (res.statusCode === 200) {
                this.setState({ msg: 'Login Successful' });
            }
            else {
                this.setState({ msg: res.body });
            }
        } else {
            this.setState({ msg: "Form has errors" });
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ fields: { [name]: value } });
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        const regexDigits = /^[0-9]+$/;
        const regexEmail = /\S+@\S+\.\S+/;
        const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6-16}$/;

        //Mobile/Email
        if (!fields["id"]) {
            formIsValid = false;
            errors["id"] = "Cannot be empty";
        } else {

            if (fields["id"].match(regexDigits)) {
                if (fields["id"].length !== 10) {
                    formIsValid = false;
                    errors["id"] = "Enter a 10 digit Mobile Number";
                } else {
                    fields["phone_number"] = fields["id"];
                }
            } else {
                if (!fields["id"].match(regexEmail)) {
                    formIsValid = false;
                    errors["id"] = "Enter a valid email Id";
                }
                else {
                    fields["email"] = fields["id"];
                }
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be Empty";
        } else if (!fields["password"].match(regexPassword)) {
            formIsValid = false;
            errors["password"] = "Enter a Valid Password";
        }

        this.setState({ errors: errors, fields: fields });
        console.log(this.state);
        return formIsValid;
    }
}
export default Login;