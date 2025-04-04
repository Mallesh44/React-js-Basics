// src/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(text) ||
      user.email.toLowerCase().includes(text) ||
      user.username.toLowerCase().includes(text)
    );
    setFilteredUsers(filtered);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>

      <input
        type="text"
        placeholder="Filter users..."
        value={filterText}
        onChange={handleFilterChange}
      />

      {filteredUsers.length > 0 ? (
        <UserTable users={filteredUsers} onDeleteUser={handleDeleteUser} />
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserDashboard;