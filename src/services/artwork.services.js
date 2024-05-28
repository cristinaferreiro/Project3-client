import axios from 'axios'


class ArtworkServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/artworks`
        })
        this.axiosApp.interceptors.request.use(config => {
            console.log('PRUEBA')
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config
        })

    }
    getAllArtwork() {
        return this.axiosApp.get('/')
    }
    getOneEArtwork(artworkId) {
        return this.axiosApp.get(`/${artworkId}`)
    }
    saveArtwork(artworkData) {
        return this.axiosApp.post('/', artworkData)
    }
    editArtwork(artworkData) {
        return this.axiosApp.put(`/${artworkId}`, artworkData)
    }
    deleteArtwork() {
        return this.axiosApp.delete(`/${artworkId}`)
    }
}
const artworkServices = new ArtworkServices()
export default artworkServices







