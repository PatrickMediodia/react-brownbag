import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userpool from '../services/userpool';
import updateProfile from '../services/updateProfile';

export default function EditProfile() {
    const navigate = useNavigate();

    const currentUser = userpool.getCurrentUser();
    currentUser.getSession((err, res)=> {
        if (err) reject(err);
    });

    const { 
        email, 
        address, 
        phone_number, 
        family_name, 
        given_name, 
        middle_name 
    } = currentUser.signInUserSession.idToken.payload;

    const [formData, setFormData] = useState({
        email, 
        phone_number, 
        family_name, 
        given_name, 
        middle_name,
        address: address.formatted,
    });

    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(formData);
            alert('Profile data has been updated.');
            navigate('/profile');
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-header">Edit Profile</h1>
            <div className="form-field">
                Email: 
                <input
                    className="form-input"
                    name='email'
                    type='text'
                    value={formData.email}
                    autoComplete="off"
                    onChange={handleChange}
                />
            </div>
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
                Address 
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
            <div className="form-link">
                <Link to='/profile' className="form-link">View Profile</Link>
            </div>
        </form>
    );
}
