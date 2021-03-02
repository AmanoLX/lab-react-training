import React, { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
  state = {
    img: '/img/persons/maxence.png',
  };

  handleTogglePicture = () => {
    const img = '/img/persons/maxence.png';
    const imgClicked = '/img/persons/maxence-glasses.png';

    this.state.img === img
      ? this.setState({ img: imgClicked })
      : this.setState({ img: img });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.img}
          alt="Maxence"
          onClick={this.handleTogglePicture}
          className="clickable-picture"
        />
      </div>
    );
  }
}

export default ClickablePicture;
