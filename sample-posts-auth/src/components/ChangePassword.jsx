import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../providers/UserProvider';
import changePassword from '../services/changePassword';

export default function ChangePassword() {
    const navigate = useNavigate();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
    }, []);

    const [passwords, setPasswords] = useState({
        previousPassword: '',
        proposedPassword: '',
        confirmProposedPassword: ''
    });

    const handleChange = (e) => {
        setPasswords((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
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
                    type='password'
                    value={passwords.previousPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className='form-field'>
                New Password
                <input
                    className="form-input"
                    name='proposedPassword'
                    type='password'
                    value={passwords.proposedPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className='form-field'>
                Confirm New Password
                <input
                    className="form-input"
                    name='confirmProposedPassword'
                    type='password'
                    value={passwords.confirmProposedPassword}
                    onChange={handleChange}
                    autoComplete="off"
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
