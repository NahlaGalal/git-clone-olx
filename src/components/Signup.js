import React, { Component } from 'react';
import Input from './Input';

import '../style/signup.css';

function CheckValidity(props){
    if(props.unvalid === "missing") return <p>Missing Data</p>
    else if(props.unvalid === 'pass') return <p> The passwords doesn't match </p>
    else return <p></p>
}

export default class Signup extends Component {
    constructor (props){
        super(props);
        this.state = {
            Name: '',
            User: '',
            Mail: '',
            Password: '',
            RePassword: '',
            Phone: '',
            Country: '',
            unvalid: 'valid'
        }
    }

    changeInput = e => this.setState({[e.target.name]: e.target.value})

    handleBlur = e => {
        if(e.target.value === '') e.target.nextElementSibling.style.display = "block";
        else e.target.nextElementSibling.style.display = "none";
    }

    handleSubmit = e => {
        e.preventDefault();
        let validity = true;
        Object.keys(this.state).forEach(key =>{
            if(this.state[key] === '' && key !== "unvalid") validity = false;
        })
        if(!validity) this.setState({unvalid: 'missing'});
        else if(this.state.Password !== this.state.RePassword) this.setState({unvalid: 'pass'});
        else this.setState({unvalid: 'valid'});
        this.props.location.pathName = '/';
    }

    render() {              
        return (
            <form onSubmit={this.handleSubmit} className="signup">
                <h1>Create your account</h1>
                <CheckValidity unvalid={this.state.unvalid} />
                <div className="form-group">
                    <Input name="Name"
                            label="Full Name"
                            type="text"
                            text="Enter your full name"
                            icon="user"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput}/>
                    <Input name="User"
                            label="User Name"
                            type="text"
                            text="Enter your user name"
                            icon="user"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                </div>
                <div>
                    <Input name="Mail"
                            label="Email Address"
                            type="email"
                            text="Enter your e-mail"
                            icon="envelope"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                </div>
                <div className="form-group">
                    <Input name="Password"
                            label="Password"
                            type="password"
                            text="Enter your password"
                            icon="key"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                    <Input name="RePassword"
                            label="Confirm Password"
                            type="password"
                            text="Re-enter your password"
                            icon="key"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                </div>
                <div>
                    <Input name="Phone"
                            label="Phone Number"
                            type="text"
                            text="Enter your phone number"
                            icon="phone"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                </div>
                <div>
                    <Input name="Country"
                            label="Country"
                            type="text"
                            text="Enter your country"
                            icon="location-arrow"
                            handleBlur={this.handleBlur}
                            changeInput={this.changeInput} />
                </div>
                <input type="submit" value="Sign up"/>
            </form>
        )
    }
}