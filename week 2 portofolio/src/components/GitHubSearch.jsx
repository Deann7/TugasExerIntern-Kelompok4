import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const GitHubSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchUser  = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User  not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">GitHub Profile Search</h2>
      
      {/* Search Form */}
      <form onSubmit={searchUser } className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            disabled={isLoading}
          >
            <SearchIcon className="w-5 h-5" />
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {/* User Profile Card */}
      {userData && (
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6">
          <img
            src={userData.avatar_url}
            alt={`${userData.login}'s profile`}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{userData.name || userData.login}</h3>
            <p className="text-gray-600">@{userData.login}</p>
            {userData.bio && <p className="mt-2 text-gray-700">{userData.bio}</p>}
            <div className="mt-4">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubSearch;