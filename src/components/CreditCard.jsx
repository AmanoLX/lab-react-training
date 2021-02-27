import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const str = number.toString();
  const dots = '•••• •••• ••••';
  const lastNumbers = str.slice(str.length - 4);
  const creditcardNumber = `${dots} ${lastNumbers}`;

  // console.log(id.slice(id.length - 5));
  // let numbers = number.replace(/[0-9]/, '·');
  return (
    <div
      className="creditcard"
      style={{
        background: bgColor,
        color: color,
      }}
    >
      <p className="creditcard__type">{type}</p>
      <h3 className="creditcard__number">{creditcardNumber}</h3>
      <div className="creditcard__info">
        <small className="creditcard__info-expiration">
          Expires {expirationMonth}/{expirationYear}
        </small>
        <small>{bank}</small>
        <div className="creditcard__info-owner">
          <small>{owner}</small>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
