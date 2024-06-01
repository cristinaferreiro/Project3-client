import { Routes, Route } from 'react-router-dom'


import HomePage from './../pages/HomePage/HomePage'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'

import ProfilePage from './../pages/ProfilePage/ProfilePage'
import EditUserPage from './../pages/EditUserPage/EditUserPage'


import UserGalleryPage from '../pages/xXUserGalleryPage/UserGalleryPage'
import UserDetailsPage from '../pages/XXUserDetailsPage/UserDetailsPage'

import AddArtworkPage from './../pages/AddArtworkPage/AddArtworkPage'
import ArtworkGalleryPage from '../pages/XArtworkGalleryPage/ArtworkGalleryPage'
import ArtworkDetailsPage from './../pages/ArtworkDetailsPage/ArtworkDetailsPage'

import AddExhibitionPage from './../pages/AddExhibitionPage/AddExhibitionPage'
import ExhibitionGalleryPage from '../pages/XxhibitionGalleryPage/ExhibitionGalleryPage'
import ExhibitionDetailsPage from './../pages/ExhibitionDetailsPage/ExhibitionDetailsPage'

import ErrorPage from './../pages/ErrorPage/ErrorPage'
import PrivateRoute from './PrivateRoutes'
import ArtistsPage from '../pages/ArtistsPage/ArtistsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutUsPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit-profile/:userId" element={<EditUserPage />} />


                {/* <Route path="/user-gallery" element={<UserGalleryPage />} />
                <Route path="/user-details" element={<UserDetailsPage />} /> */}

                <Route path="/add-artwork" element={<AddArtworkPage />} />
                {/* <Route path="/artwork-gallery" element={<ArtworkGalleryPage />} /> */}
                <Route path="/artwork-details/:artworkId" element={<ArtworkDetailsPage />} />
                <Route path="/artists" element={<ArtistsPage />} />


                <Route path="/add-exhibition" element={<AddExhibitionPage />} />
                {/* <Route path="exhibition-gallery/" element={<ExhibitionGalleryPage />} /> */}
                <Route path="/exhibition-details/:exhibitionId" element={<ExhibitionDetailsPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes
