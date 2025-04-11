import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${apiKey}`,
    },
  });
  return response.data;
};
