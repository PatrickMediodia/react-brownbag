import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profile_img from '../assets/profile.png';
import getUser, { getUserAttributes } from '../services/getUser';

const initialstate = {
    email: '', 
    address: '', 
    phone_number: '', 
    family_name: '', 
    given_name: '', 
    middle_name: '',    
}

export default function ViewProfile() {
    const currentUser = getUser();
    
    const [viewUserObject, setViewUserObject] = useState(false);
    const [formData, setFormData] = useState(initialstate);
    
    useEffect(() => {
        const getUserAttributesAsync = async () => {
            setFormData(await getUserAttributes());
        };
        getUserAttributesAsync();
    }, []);

    const userObject = <div className="pre-body">
        <h1 className="form-header">User Object</h1>
        <div className="form-link">
            <Link 
                className="form-link" 
                onClick={()=>setViewUserObject(false)}
            >
                View Profile
            </Link>
        </div>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
    </div>;

    const profile = <div className="form">
        <h1 className="form-header">Profile</h1>
        <div className='profile-container'>
            <img 
                src={profile_img} 
                alt='profile photo' 
                className='profile-img'
            />
        </div>
        <div className="form-field">
            Email: 
            <input
                className="form-input"
                name='email'
                type='text'
                value={formData.email}
                autoComplete="off"
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
            />
        </div>
        <div className="form-link">
            <Link to='/editprofile' className="form-link">Edit Profile</Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/changepassword' className="form-link">Change Password</Link>
        </div>
        <div className="form-link">
            <Link className="form-link" onClick={()=>setViewUserObject(true)}>View User Object</Link>
        </div>
    </div>;

    return (viewUserObject ? userObject : profile);
}
