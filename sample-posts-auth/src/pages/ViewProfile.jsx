import { useState } from 'react';
import { Link } from 'react-router-dom';
import getUser from '../services/getUser';
import profile_img from '../assets/profile.png';

export default function ViewProfile() {
    const [viewUserObject, setViewUserObject] = useState(false);

    const currentUser = getUser();
    const { 
        email,
        address, 
        phone_number, 
        family_name, 
        given_name, 
        middle_name 
    } = currentUser.signInUserSession.idToken.payload;
    
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
                value={email}
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
                value={given_name}
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
                value={middle_name}
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
                value={family_name}
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
                value={phone_number}
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
                value={address.formatted}
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
