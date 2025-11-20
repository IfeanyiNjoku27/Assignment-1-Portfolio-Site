import axios from "axios";

const API_URL = 'https://assignment-2-backend-portfolio.onrender.com/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;