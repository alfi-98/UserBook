import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getAllUsers = () => {
    return axios.get(`${BASE_URL}/users`);
};

export const getUserById = (userId) => {
    console.log("API",userId)
    return axios.get(`${BASE_URL}/users/${userId}`)
}
