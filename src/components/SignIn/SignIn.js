import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            signinEmail:'',
            signinPassword: '',
            incorrectSignin: false,
        }
    }

    onEmailChange = (event) => {
        this.setState({signinEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signinPassword: event.target.value})
    }

    onSubmitSignin = () => {
        const {signinEmail, signinPassword} = this.state
        fetch("http://localhost:3000/signin", {
            method: 'post',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify({
                email: signinEmail,
                password: signinPassword,
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            } else {
                this.setState({incorrectSignin: true})
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5 flex justify-center items-center">
                    <div className="measure tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib z13 relative" 
                                type="submit" 
                                value="Sign in"
                                onClick={this.onSubmitSignin}
                                />
                            </div>
                            <div className="lh-copy mt3">
                                <p 
                                onClick={() => onRouteChange('register')}
                                className="f6 link dim black db pointer z13 relative">Register</p>
                            </div>
                            {this.state.incorrectSignin ? <p className="db fw6 lh-copy f6">Incorrect Email or Password</p> : null}
                    </div>
                </article>
            </div>
        );
    }
}

export default SignIn;