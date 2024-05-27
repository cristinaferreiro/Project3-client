
import { Routes, Route } from 'react-router-dom'



import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'
import AddArtworkPage from './../pages/AddArtworkPage/AddArtworkPage'
import AddExhibitionPage from './../pages/AddExhibitionPage/AddExhibitionPage'
import ArtworkDetailsPage from './../pages/ArtworkDetailsPage/ArtworkDetailsPage'
import ArtworkGalleryPage from './../pages/ArtworkGalleryPage/ArtworkGalleryPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'
import ExhibitionDetailsPage from './../pages/ExhibitionDetailsPage/ExhibitionDetailsPage'
import ExhibitionGalleryPage from './../pages/ExhibitionGalleryPage/ExhibitionGalleryPage'
import HomePage from './../pages/HomePage/HomePage'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import UserDetailsPage from './../pages/UserDetailsPage/UserDetailsPage'
import UserGalleryPage from './../pages/UserGalleryPage/UserGalleryPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutUsPage />} />

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
