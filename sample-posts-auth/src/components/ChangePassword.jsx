import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../providers/UserProvider';
import changePassword from '../services/changePassword';

export default function ChangePassword() {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);
    
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
            case 'CodeMismatchException':
                alert('Invalid verification code provided, please try again.');
                break;
            default:
                alert(err);
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await changePassword({ 
                user: user,
                oldPassword: passwords.previousPassword, 
                newPassword: passwords.proposedPassword 
            });
            navigate('/');
            alert('Password has been changed');
        } catch(err) {
            console.log(err);
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
                    type={showPasswords.showConfirmedProposedPassword ? 'text' : 'password' }
                    value={passwords.showConfirmedProposedPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <div className="form-check">
                    <input 
                        type="checkbox"
                        name="showConfirmedProposedPassword"
                        checked={showPasswords.showConfirmedProposedPassword}
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
        </form>
    );
}
