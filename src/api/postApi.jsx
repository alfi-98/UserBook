import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export function getPosts(userId) {
    return axios.get(`${BASE_URL}/users/${userId}/posts`)
      .then(response => response.data.posts)
      .catch(error => {
        console.error("Error fetching user posts:", error);
        throw error;
      });
  }
  