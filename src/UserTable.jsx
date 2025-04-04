// src/UserTable.jsx
import React from 'react';
import UserRow from './UserRow';

function UserTable({ users, onDeleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserRow key={user.id} user={user} onDelete={onDeleteUser} />
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;