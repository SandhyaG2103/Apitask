// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  const { name, username, email, website, address, company } = user;

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noreferrer">{website}</a></p>
      <p><strong>Address:</strong> {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}</p>
      <p><strong>Company:</strong> {company.name}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

export default UserCard;
