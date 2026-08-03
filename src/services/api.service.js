import axios from 'axios'

const api = axios.create({
    baseURL :  import.meta.env.VITE_BACKEND_URL || "https://dbextractor-backend-production.up.railway.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api
