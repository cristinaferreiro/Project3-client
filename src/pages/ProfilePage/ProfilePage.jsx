import React, { useContext, useEffect, useState } from 'react'
import './ProfilePage.css'
import { AuthContext } from './../../context/auth.context'
import userServices from '../../services/user.services'

function ProfilePage() {

    const { user } = useContext(AuthContext)

    const [userData, setUserInfo] = useState({})
    const [artworkData, setArtworkInfo] = useState([])
    const [exhibitionData, setExhibitionInfo] = useState([])

    useEffect(() => {
        loadUserInfo()
    }, [user])

    const loadUserInfo = () => {

        userServices
            .getOneUsers(user._id)
            .then(({ data }) => {
                setUserInfo(data.userInfo)
                setArtworkInfo(data.artworksInfo)
                setExhibitionInfo(data.exhibitionsInfo)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>PERFIL DE USUARIO</h1>
            <h1>Hola {userData?.username}</h1>
            <hr />
            <h2>Bio: {userData?.userbio}</h2>
            <h2>Last Name: {userData?.lastname}</h2>
            <h2>Country: {userData?.country}</h2>
            <hr />
            <h2>Expos: {
                exhibitionData?.map(elm => <p>{elm.title}</p>)
            }</h2>

            <hr />
        </div>
    )
}

export default ProfilePage

















// import React, { useContext, useEffect, useState } from 'react'
// import './ProfilePage.css'
// import { AuthContext } from './../../context/auth.context'
// import userServices from '../../services/user.services'

// function ProfilePage() {
//     const { user } = useContext(AuthContext)
//     const [userData, setUserInfo] = useState({})
//     const [userData, setUserInfo] = useState({})
//     const [userData, setUserInfo] = useState({})

//     useEffect(() => {
//         loadUserInfo()
//     }, [user])

//     const loadUserInfo = () => {
//         userServices
//             .getOneUsers(user._id)
//             .then(({ data }) => setUserInfo(data))
//             .catch(err => console.log(err))
//     }

//     // if (!userInfo) {
//     //     return <div>Loading...</div>
//     // }

//     const { userInfo, artworksInfo, exhibitionsInfo } = userData

//     return (
//         <div>
//             <h1>PERFIL DE USUARIO</h1>
//             <h1>Hola {userInfo?.username}</h1>
//             <hr />
//             <h2>Bio: {userInfo?.userbio}</h2>
//             <h2>Last Name: {userInfo?.lastname}</h2>
//             <h2>Country: {userInfo?.country}</h2>
//             <hr />
//         </div>
//     )
// }

// export default ProfilePage

