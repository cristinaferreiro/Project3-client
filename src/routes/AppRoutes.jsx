

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
