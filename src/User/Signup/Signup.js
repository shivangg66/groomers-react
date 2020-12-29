import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: "", errors: {}, fields: {} };
        this.handleLogin = this.handleSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }
    render() {
        return <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" name="name" /><span style={{ color: "red" }}>{this.state.errors["name"]}</span><span></span>
                <label htmlFor="mobile">Phone No.: </label>
                <input id="mobile" type="text" name="phone_number" /><span style={{ color: "red" }}>{this.state.errors["phone_number"]}</span><span></span>
                <label htmlFor="dob">Date of Birth: </label>
                <input id="dob" type="date" name="dob" /><span style={{ color: "red" }}>{this.state.errors["dob"]}</span><span></span>
                <label htmlFor="email">Email: </label>
                <input id="email" type="text" name="email" /><span style={{ color: "red" }}>{this.state.errors["email"]}</span><span></span>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password" /><span style={{ color: "red" }}>{this.state.errors["password"]}</span><span></span>
                <input type="button" value="Sign Up" />
                <span>{this.state.msg}</span>
            </form>
        </div>;
    }
    async handleSignup(e) {
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
        this.setState(state => {
            let fields = state.fields;
            fields[`${name}`] = value;
            return ({ fields: fields });
        });
    }
    handleValidation() {
        const fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        const regexDigits = /^[0-9]+$/;
        const regexEmail = /\S+@\S+\.\S+/;
        const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6-16}$/;


        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }
        if (!fields["phone_number"]) {
            formIsValid = false;
            errors["phone_number"] = "Cannot be empty";
        } else if (!fields["phone_number"].match(regexDigits) || fields["phone_number"].length !== 10) {
            formIsValid = false;
            errors["phone_number"] = "Enter a 10 digit Mobile Number";
        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        } else if (!fields["id"].match(regexEmail)) {
            formIsValid = false;
            errors["id"] = "Enter a valid email Id";
        }
        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "Cannot be empty";
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be Empty";
        } else if (!fields["password"].match(regexPassword)) {
            formIsValid = false;
            errors["password"] = "Enter a Valid Password";
        }

        this.setState({ errors: errors });
        console.log(this.state);
        return formIsValid;
    }
}
export default Signup;