import React from 'react';
import './IdCard.css';

const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {
  return (
    <article className="card idCard">
      <div className="idCard__left">
        <img src={picture} alt="" />
      </div>
      <div className="idCard__right">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}m
        </p>
        <p>
          <strong>Heigth:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toUTCString()}
        </p>
      </div>
    </article>
  );
};

export default IdCard;
