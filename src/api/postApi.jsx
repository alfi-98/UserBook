import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getPosts = (userId) => {
    return axios.get(`${BASE_URL}/users/${userId}/posts`);
}