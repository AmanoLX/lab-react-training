import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r},${g},${b})`;

  let red = Number(r).toString(16);
  let green = Number(g).toString(16);
  let blue = Number(b).toString(16);
  if (red.length === 1) {
    red = `0${red}`;
  }
  if (green.length === 1) {
    green = `0${green}`;
  }
  if (blue.length === 1) {
    blue = `0${blue}`;
  }
  const hexColor = `#${red}${green}${blue}`;

  return (
    <div
      className="card boxColor__card"
      style={{
        background: rgbColor,
        color: rgbColor === 'rgb(255,0,0)' ? 'white' : 'black',
      }}
    >
      <p>{rgbColor}</p>
      <p>{hexColor}</p>
    </div>
  );
};

export default BoxColor;
