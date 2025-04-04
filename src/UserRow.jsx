// src/UserRow.jsx
import React from 'react';

function UserRow({ user, onDelete }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default UserRow;