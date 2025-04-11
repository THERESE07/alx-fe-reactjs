import React, { useState } from 'react';
import Search from './components/Search';
import { fetchAdvancedUserData } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await fetchAdvancedUserData(searchParams);
      setUsers(data);
    } catch (err) {
      setError('Could not fetch users based on the search criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
            <h2 className="text-lg font-bold">{user.login}</h2>
            <p>{user.location || 'No location specified'}</p>
            <p>Repositories: {user.public_repos || 'N/A'}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
