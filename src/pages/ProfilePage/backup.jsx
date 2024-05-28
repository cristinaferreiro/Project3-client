import React, { useContext } from 'react';
import './ProfilePage.css';
import { AuthContext } from '../../context/auth.context';



function ProfilePage() {
    const { user } = useContext(AuthContext);



    return (
        <div>
            <h1>Hola {user.username}</h1>
            <hr />
            <h2>Bio: {user.userbio}</h2>
            <h2>Last Name: {user.lastname}</h2>
            <h2>Country: {user.country}</h2>
            <hr />
        </div>
    );
}

export default ProfilePage