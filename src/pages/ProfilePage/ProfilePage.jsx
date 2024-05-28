import React, { useContext } from 'react';
import './ProfilePage.css';
import { AuthContext } from './../../context/auth.context';

function ProfilePage() {

    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Hola {user.username}</h1>
        </div>
    );
}

export default ProfilePage