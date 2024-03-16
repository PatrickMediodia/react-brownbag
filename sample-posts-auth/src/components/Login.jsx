import { useState } from "react";
import authenticate from "../services/authenticate";

export default function Login() {
    const [ loginCredentials, setLoginCredetials] = useState({ 
        email: '', 
        password: ''
    });

    const handleChange = (e) => {
        e.preventDefault();

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
            console.log(authDetails);
        } catch(err) {
            console.log('unable to authenticate');
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
