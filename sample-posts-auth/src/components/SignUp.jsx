import { useState } from "react";
import signup from "../services/signup";
import { Link, useNavigate } from "react-router-dom";

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

    const [showPasswords, setShowPasswords] = useState({
        showPassword: false,
        showConfirmPassword: false,
    });
    
    const handleChange = (e) => {
        setSignupCredetials((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }

    const handleCheckChange = (e) => {
        setShowPasswords((prev) => {
            console.log(prev)
            return {
                ...prev,
                [e.target.name]: !prev[e.target.name],
            }
        });
    }

    const handleException = (err) => {
        switch(err) {
            case 'InvalidParameterException':
                alert('Please Confirm your email');
                break;
            case 'InvalidPasswordException':
                alert('Invalid Password Used.');
                break;
            case 'UsernameExistsException':
                alert('User with that email already exists. Please login.');
                break;
            default:
                alert(err);
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(signupCredentials);
            navigate('/confirmsignup', {
                state: { username: signupCredentials.email }
            });
        } catch(err) {
            handleException(err.name);
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
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                Password:
                <input
                    className="form-input"
                    name='password'
                    type={showPasswords.showPassword ? 'text' : 'password'}
                    value={signupCredentials.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        name="showPassword"
                        checked={showPasswords.showPassword}
                        onChange={handleCheckChange}
                    />
                    Show Password
                </div>
            </div>
            <div className="form-field">
                Confirm Password:
                <input
                    className="form-input"
                    name='confirmPassword'
                    type={showPasswords.showConfirmPassword ? 'text' : 'password'}
                    value={signupCredentials.confirmPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        name="showConfirmPassword"
                        checked={showPasswords.showConfirmPassword}
                        onChange={handleCheckChange}
                    />
                Show Password
            </div>
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
            <div className="form-link">
                Already have an account?&nbsp;
                <Link to='/login' className="form-link">Login</Link>
            </div>
        </form>
    );
}
