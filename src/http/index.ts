import axios from 'axios';

const API_URL = 'http://localhost:3000';

const $http = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$http.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${'token'}`;

    return config;
});

export default $http;
