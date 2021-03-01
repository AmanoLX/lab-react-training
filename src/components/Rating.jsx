import React from 'react';
import './Rating.css';

const Rating = ({ children }) => {
  const printStars = () => {
    let stars = Math.round(children);
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
    <div>
      <p>Rating: {printStars()}</p>
    </div>
  );
};

export default Rating;
