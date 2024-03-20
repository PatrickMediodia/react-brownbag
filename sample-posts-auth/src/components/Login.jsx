import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authenticate from "../services/authenticate";

/*
TODO
    - add handling of needing to confirm code
    - add handling of error on incorrect credentials
    - add handle of account not found
*/

export default function Login({ setUser }) {
    const navigate = useNavigate();
    
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
    
    const handleException = (err) => {
        switch(err) {
            case 'UserNotConfirmedException':
                navigate('/confirmsignup', {
                    state: { username: loginCredentials.email }
                });
                break;
            case 'InvalidParameterException':
                alert('Please enter a valid username and password');
                break;
            case 'NotAuthorizedException':
                alert('Incorrect username or password.');
                break;
            default:
                alert(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await authenticate(loginCredentials);
            setUser({
                username: loginCredentials.email,
                userData: userData,
            });
            navigate('/');
        } catch(err) {
            handleException(err.name);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-header">Login</h1>
            <div className="form-field">
                Email
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={loginCredentials.email}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                Password
                <input
                    className="form-input"
                    name='password'
                    type='password'
                    value={loginCredentials.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
            <div className="form-link">
                Don't have an account?&nbsp;
                <Link to='/signup' className="form-link">Sign Up</Link>
            </div>
        </form>
    );
}
