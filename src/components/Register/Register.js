import React from 'react';
import './Register.css';

const Register = ({ onRouteChange}) => {
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
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 z13 relative" 
                        type="password" 
                        name="password"  
                        id="password"/>
                    </div>
                </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib z13 relative" 
                        type="submit" 
                        value="Register"
                        onClick={() => onRouteChange('home')}
                        />
                    </div>
            </div>
        </article>
    </div>
    );
};

export default Register;