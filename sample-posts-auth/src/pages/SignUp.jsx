import { useState } from "react";
import signup from "../services/signup";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        phone_number: '', 
        family_name: '', 
        given_name: '', 
        middle_name: '',
        address: '',
    });

    const [showPasswords, setShowPasswords] = useState({
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (e) => {
        setFormData((prev) => {
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
            // case 'InvalidParameterException':
            //     alert('Please Confirm your email');
            //     break;
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

        const { password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert('Password and Confirm Password must be the same');
            return;
        }

        try {
            await signup({ ...formData });
            navigate('/confirmsignup', {
                state: { username: formData.email }
            });
        } catch(err) {
            console.log(err);
            handleException(err.name);
        }
    }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-header">Sign Up</h1>
            <div className="form-link">
                Already have an account?&nbsp;
                <Link to='/login' className="form-link">Login</Link>
            </div>
            <div className="form-field">
                Email: 
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={formData.email}
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
                    value={formData.password}
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
                    value={formData.confirmPassword}
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
            <h2 className="form-header">Profile</h2>
            <div className="form-field">
                First Name: 
                <input
                    className="form-input"
                    name='given_name'
                    type='text'
                    value={formData.given_name}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Middle Name: 
                <input
                    className="form-input"
                    name='middle_name'
                    type='text'
                    value={formData.middle_name}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Last Name: 
                <input
                    className="form-input"
                    name='family_name'
                    type='text'
                    value={formData.family_name}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Phone Number: 
                <input
                    className="form-input"
                    name='phone_number'
                    type='text'
                    value={formData.phone_number}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <div className="form-field">
                Address:
                <input
                    className="form-input"
                    name='address'
                    type='text'
                    value={formData.address}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit"
                className="form-button"
                value="Submit"
            />
        </form>
    );
}
