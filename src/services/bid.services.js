import axios from 'axios'


class BidServices {

    constructor() {

        this.axiosApp = axios.create({

            baseURL: `${import.meta.env.VITE_API_URL}/api/bids`
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config
        })
    }

    createBid(artworkId, bidData) {
        return this.axiosApp.put(`/${artworkId}`, bidData);
    }

    deleteBid(bidId) {
        return this.axiosApp.delete(`/${bidId}`);
    }

    getBidsFromArtiwork(artworkId) {
        return this.axiosApp.get(`/${artworkId}`);
    }

    getAllBids(artworkId) {
        return this.axiosApp.get(`/artwork-details/${artworkId}`);
    }
}
const bidServices = new BidServices()

export default bidServices