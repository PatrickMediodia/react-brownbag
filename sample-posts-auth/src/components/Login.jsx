import { useState } from "react";
import authenticate from "../services/authenticate";

/*
TODO
    - add handling of needing to confirm code
    - add handling of error on incorrect credentials
    - add handle of account not found
*/

export default function Login() {
    const [loginCredentials, setLoginCredetials] = useState({ 
        email: '', 
        password: ''
    });

    const handleChange = (e) => {
        setLoginCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleSubmit = async () => {
        try {
            const authDetails = await authenticate(loginCredentials);
            console.log(`AuthDetails: ${authDetails}`);
        } catch(err) {
            const error = err.name;
            if (error === 'UserNotConfirmedException') {
                console.log('Please Confirm your email');
            } else if (error === 'NotAuthorizedException') {
                alert('Incorrect username or password.');
            } else {
                console.log(error);
            }
        }
    }

    return (
        <div className="login-form">
            Login Form
            <hr/>
            Email
            <input
                className="login-input"
                name='email'
                type='text'
                value={loginCredentials.email}

                onChange={handleChange}
            />
            Password
            <input
                className="login-input"
                name='password'
                type='password'
                value={loginCredentials.password}
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
