import React from 'react';

const Random = ({ min, max }) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="card randomCard">
      <p>
        Random number between {min} and {max} => {randomNum}
      </p>
    </div>
  );
};

export default Random;
