import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './ProfilePage.css'
import { AuthContext } from './../../context/auth.context'
import AddExhibitionForm from '../../components/AddExhibitionForm/AddExhibitionForm'

const API_URL = 'http://localhost:5005'

function ProfilePage() {

    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        loadUserInfo()
    }, [user])

    const loadUserInfo = () => {
        // // TODO: SERVICIOS
        // axios.get(`${API_URL}/api/users/${user._id}`, {
        //     headers: { Authorization: `Bearer ${storedToken}` }
        // })
        //     .then(response => {
        //         setUserInfo(response.data)
        //         setIsLoading(false)
        //     })
        //     .catch(err => console.log(err))
    }



    return (

        <div>
            <h1>PERFIL DE USUARIO</h1>
            {/* <h1>Hola {userInfo.username}</h1>
            <hr />
            <h2>Bio: {userInfo.userbio}</h2>
            <h2>Last Name: {userInfo.lastname}</h2>
            <h2>Country: {userInfo.country}</h2>
            <hr />

            <AddExhibitionForm /> */}

        </div>
    )
}

export default ProfilePage
