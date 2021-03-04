import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  state = {
    image: '/img/dice3.png',
  };

  handleClick = () => {
    this.setState({
      image: '/img/dice-empty.png',
    });

    setTimeout(() => {
      if (this.state.image === '/img/dice-empty.png') {
        const dots = Math.ceil(Math.random() * 6);
        this.setState({
          image: `/img/dice${dots}.png`,
        });
      }
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          src={this.state.image}
          alt="dice"
          onClick={this.handleClick}
          className="dice-img"
        />
      </div>
    );
  }
}

export default Dice;
