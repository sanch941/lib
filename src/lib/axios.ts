import axios from 'axios';
import { baseUrl } from './lib';

export const baseAxios = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});

export const setupAxios = () => {
    baseAxios.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            return Promise.reject(error);
        }
    );
};
