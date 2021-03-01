import React from 'react';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  const printStars = () => {
    let stars = Math.round(rating);
    switch (stars) {
      case 5:
        return '★★★★★';
      case 4:
        return '★★★★☆';
      case 3:
        return '★★★☆☆';
      case 2:
        return '★★☆☆☆';
      case 1:
        return '★☆☆☆☆';
      default:
        return '☆☆☆☆☆';
    }
  };

  return (
    <div className="driverCard">
      <div className="driverCard__box">
        <div className="driverCard__imageBox">
          <img src={img} alt="driver" className="driverCard__imageBox-image" />
        </div>
        <div className="driverCard__info">
          <h2 className="driverCard__info-name">{name}</h2>
          <h3 className="driverCard__info-rating">{printStars()}</h3>
          <div className="driverCard__info-car">
            <div className="driverCard__car-model">
              <p>{car.model} -</p>
            </div>
            <div className="driverCard__car-license">
              <p>{car.licensePlate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
