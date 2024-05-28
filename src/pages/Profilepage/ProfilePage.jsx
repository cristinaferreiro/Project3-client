
import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'


function ProfilePage() {

    const { user } = useContext(AuthContext)

    return (
        <h1>HOLA {user.username}{user.lastname}</h1>

    )
}

export default ProfilePage
