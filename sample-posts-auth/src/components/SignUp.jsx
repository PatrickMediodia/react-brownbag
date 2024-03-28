import { useState } from "react";
import signup from "../services/signup";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [signupCredentials, setSignupCredetials] = useState({ 
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
                alert(`Invalid Password Used. Password must have the following.\n
- Must be at least 8 characters
- Contains at least 1 number
- Contains at least 1 special character
- Contains at least 1 uppercase letter
- Contains at least 1 lowercase letter`);
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

        const { password, confirmPassword } = signupCredentials;
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must be the same');
            return;
        }

        try {
            await signup({ 
                email: signupCredentials.email, 
                given_name: 'given name', 
                middle_name: 'middle name', 
                family_name: 'family name', 
                phone_number: '+6399900001111', 
                birthdate: '2000-01-01', 
                address: 'address', 
                password: signupCredentials.password,
            });
            navigate('/confirmsignup', {
                state: { username: signupCredentials.email }
            });
        } catch(err) {
            console.log(err);
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
                Show Confirm Password
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
