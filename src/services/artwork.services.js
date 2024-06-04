import axios from 'axios'


class ArtworkServices {

    constructor() {

        this.axiosApp = axios.create({

            baseURL: `${import.meta.env.VITE_API_URL}/api/artworks`
        })

        this.axiosApp.interceptors.request.use(config => {

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
    getAllArtworkByArtist(userId) {
        return this.axiosApp.get(`/artist/${userId}`)
    }
    getOneArtwork(artworkId) {
        return this.axiosApp.get(`/${artworkId}`)
    }
    saveArtwork(artworkData) {
        return this.axiosApp.post('/', artworkData)
    }
    editArtwork(artworkId, artworkData) {
        return this.axiosApp.put(`/${artworkId}`, artworkData)
    }
    deleteArtwork(artworkId) {
        return this.axiosApp.delete(`/${artworkId}`)
    }
}
const artworkServices = new ArtworkServices()
export default artworkServices







