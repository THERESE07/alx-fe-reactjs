import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${BASE_URL}${query.trim()}`);
    return response.data.items; // Returns the list of users
  } catch (error) {
    throw new Error('Error fetching users.');
  }
};
