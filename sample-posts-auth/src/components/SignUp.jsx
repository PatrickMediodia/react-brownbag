import { useState } from "react";
import signup from "../services/signup";

/*
TODO
    - add functionality for redirect on successful signup
    - add functionality for validating sign up data
    - add functionality for confirm password
*/

export default function SignUp() {
    const [ signupCredentials, setSignupCredetials] = useState({ 
        email: '', 
        password: ''
    });

    const handleChange = (e) => {
        setSignupCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleSubmit = async () => {
        try {
            const signupDetails = await signup(signupCredentials);
            console.log(signupDetails);
        } catch(err) {
            console.log('unable to signup');
        }
    }

    return (
        <div className="login-form">
            Signup Form
            <hr/>
            Email
            <input
                className="login-input"
                name='email'
                type='text'
                value={signupCredentials.email}

                onChange={handleChange}
            />
            Password
            <input
                className="login-input"
                name='password'
                type='password'
                value={signupCredentials.password}
                onChange={handleChange}
            />
            Confirm Password
            <input
                className="login-input"
                name='password'
                type='password'
                value={signupCredentials.password}
                onChange={handleChange}
            />
            <input 
                type="submit"
                className="login-button"
                onClick={handleSubmit}
            />
        </div>
    );
}
