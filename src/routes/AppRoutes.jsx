import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'

import ProfilePage from './../pages/ProfilePage/ProfilePage'


import UserGalleryPage from './../pages/UserGalleryPage/UserGalleryPage'
import UserDetailsPage from './../pages/UserDetailsPage/UserDetailsPage'

import AddArtworkPage from './../pages/AddArtworkPage/AddArtworkPage'
import ArtworkGalleryPage from './../pages/ArtworkGalleryPage/ArtworkGalleryPage'
import ArtworkDetailsPage from './../pages/ArtworkDetailsPage/ArtworkDetailsPage'

import AddExhibitionPage from './../pages/AddExhibitionPage/AddExhibitionPage'
import ExhibitionGalleryPage from './../pages/ExhibitionGalleryPage/ExhibitionGalleryPage'
import ExhibitionDetailsPage from './../pages/ExhibitionDetailsPage/ExhibitionDetailsPage'

import ErrorPage from './../pages/ErrorPage/ErrorPage'
import PrivateRoute from './PrivateRoutes'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutUsPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="/user-gallery" element={<UserGalleryPage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />

            <Route path="/add-artwork" element={<AddArtworkPage />} />
            <Route path="/artwork-gallery" element={<ArtworkGalleryPage />} />
            <Route path="/artwork-details" element={<ArtworkDetailsPage />} />

            <Route path="/add-exhibition" element={<AddExhibitionPage />} />
            <Route path="/exhibition-gallery" element={<ExhibitionGalleryPage />} />
            <Route path="/exhibition-details" element={<ExhibitionDetailsPage />} />

            <Route path="*" element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes
