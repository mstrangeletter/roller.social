import React from 'react';

function Card({ title, description, coordinates }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{coordinates}</p>
    </div>
  );
}

export default Card;
