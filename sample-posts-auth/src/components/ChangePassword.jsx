import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import changePassword from '../services/changePassword';

export default function ChangePassword() {
    const navigate = useNavigate();

    const [passwords, setPasswords] = useState({
        previousPassword: '',
        proposedPassword: '',
        confirmProposedPassword: ''
    });

    const [showPasswords, setShowPasswords] = useState({
        showPassword: false,
        showProposedPassword: false,
        showConfirmProposedPassword: false,
    });

    const handleChange = (e) => {
        setPasswords((prev) => {
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
            case 'NotAuthorizedException':
                alert('Incorrect old password');
                break;
            default:
                alert(err);
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { proposedPassword, confirmProposedPassword } = passwords;
        if (proposedPassword !== confirmProposedPassword) {
            alert('New Password and Confirm New Password must be the same');
            return;
        }

        try {
            await changePassword({
                oldPassword: passwords.previousPassword, 
                newPassword: passwords.proposedPassword 
            });
            navigate('/posts');
            alert('Password has been changed');
        } catch(err) {
            handleException(err.name);
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className="form-header">Change Password</h1>
            <div className='form-field'>
                Old Password
                <input
                    className="form-input"
                    name='previousPassword'
                    type={showPasswords.showPassword ? 'text' : 'password' }
                    value={passwords.previousPassword}
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
            <div className='form-field'>
                New Password
                <input
                    className="form-input"
                    name='proposedPassword'
                    type={showPasswords.showProposedPassword ? 'text' : 'password' }
                    value={passwords.proposedPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        name="showProposedPassword"
                        checked={showPasswords.showProposedPassword}
                        onChange={handleCheckChange}
                    />
                    Show Password
                </div>
            </div>
            <div className='form-field'>
                Confirm New Password
                <input
                    className="form-input"
                    name='confirmProposedPassword'
                    type={showPasswords.showConfirmProposedPassword ? 'text' : 'password' }
                    value={passwords.confirmProposedPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        name="showConfirmProposedPassword"
                        checked={showPasswords.showConfirmProposedPassword}
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
                <Link to='/profile' className="form-link">View Profile</Link>
            </div>
        </form>
    );
}
