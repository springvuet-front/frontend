import axios from 'axios';

const instance = axios.create({
    baseURL: '/api'
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token; // 토큰을 Bearer 스키마에 추가
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
