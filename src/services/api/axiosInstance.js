import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.70:5263', // API de ejemplo
    timeout: 1000,
    
    headers: {
        'Content-Type': 'application/json',
    },
});

