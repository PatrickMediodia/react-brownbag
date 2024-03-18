import { useState } from "react";
import signup from "../services/signup";
import { Outlet, Link, useNavigate } from "react-router-dom";

/*
TODO
    - add functionality for redirect on successful signup
    - add functionality for validating sign up data
    - add functionality for confirm password
*/

export default function SignUp() {
    const navigate = useNavigate();

    const [ signupCredentials, setSignupCredetials] = useState({ 
        email: '', 
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setSignupCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const signupDetails = await signup(signupCredentials);
            console.log(signupDetails);
        } catch(err) {
            const error = err.name;
            if (error === 'InvalidParameterException') {
                alert('Please Confirm your email');
            } else if (error === 'InvalidPasswordException') {
                alert('Incorrect username or password.');
            } else if (error === 'UsernameExistsException') {
                navigate('/confirmSignUp');
            } else {
                alert(error);
            }
            console.log('unable to signup');
            console.log(err);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-header">Sign Up</h1>
            <div className="form-field">
                Email: 
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={signupCredentials.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Password:
                <input
                    className="form-input"
                    name='password'
                    type='password'
                    value={signupCredentials.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Confirm Password:
                <input
                    className="form-input"
                    name='password'
                    type='password'
                    value={signupCredentials.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
            <div className="form-link">
                Already have an account?
                <a href="" className="form-link">Login</a>
            </div>
        </form>
    );
}
