import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './ProfilePage.css'
import { AuthContext } from './../../context/auth.context'
import AddExhibitionForm from '../../components/AddExhibitionForm/AddExhibitionForm'

const API_URL = 'http://localhost:5005'

function ProfilePage() {
    const { user } = useContext(AuthContext)


    useEffect(() => {
        if (user && user.id) {
            axios.get(`${API_URL}/api/users/${user.id}`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
                .then(response => {
                    setUserInfo(response.data)
                })
                .catch(err => console.log(err))
        }
    }, [user])



    return (
        <div>
            <h1>Hola {user.username}</h1>
            <hr />
            <h2>Bio: {user.userbio}</h2>
            <h2>Last Name: {user.lastname}</h2>
            <h2>Country: {user.country}</h2>
            <hr />

            <AddExhibitionForm />

        </div>
    )
}

export default ProfilePage
