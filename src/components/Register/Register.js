import './Register.css';
import React, { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            newName: '',
            newEmail: '',
            newPassword: '',
            entry: 'correct'
        }
    }

    onRegisterClick = () => {
        if (!this.state.newName || this.state.newName.length <= 0) {
            this.setState({ entry: 'nameIncorrect'})
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testEmail = re.test(String(this.state.newEmail).toLowerCase());
        if (!testEmail || testEmail.length <= 0) {
            this.setState({ entry: 'emailIncorrect'})
            return false;
        }
        if (!this.state.newPassword || this.state.newPassword.length <= 0) {
            return false;
        }
        fetch("http://localhost:3000/register", {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                name: this.state.newName,
                email: this.state.newEmail,
                password: this.state.newPassword,
            })
        })
        .then( response => response.json())
        .then(user => {
            console.log(user);
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }

    onChangeName = (event) => {
        this.setState({newName: event.target.value})
    }

    onChangeEmail = (event) => {
        this.setState({newEmail: event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({newPassword: event.target.value})
    }

    render() {
        return (
            <div>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 pa3 flex justify-center items-center">
                <div className="measure tc">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                            type="text" 
                            name="name"  
                            id="name"
                            onChange = {this.onChangeName}
                            Required
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange = {this.onChangeEmail}
                            Required
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange = {this.onChangePassword}
                            />
                        </div>
                        {this.state.entry === 'emailIncorrect' || this.state.entry === 'nameIncorrect' ? <p>Please enter the correct credentials</p> : null}
                    </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib z13 relative" 
                            type="submit" 
                            value="Register"
                            onClick = {this.onRegisterClick}
                            />
                        </div>
                </div>
            </article>
        </div>
        );
    }
}

export default Register;
