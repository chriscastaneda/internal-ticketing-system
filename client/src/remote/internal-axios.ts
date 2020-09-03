import Axios from 'axios';

const baseUrl = 'http://localhost:3001';
// const baseUrl = 'http://ec2-54-183-207-67.us-west-1.compute.amazonaws.com:3002';


export const internalAxios = Axios.create({
    baseURL: baseUrl
});

// Authenication: send token
export const authAxios = Axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
});