import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  state = {
    indexImg: 0,
  };

  prevImage = () => {
    if (this.state.indexImg > 0)
      this.setState({
        indexImg: this.state.indexImg - 1,
      });
  };

  nextImg = () => {
    if (this.state.indexImg < 3) {
      this.setState({
        indexImg: this.state.indexImg + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.props.imgs[this.state.indexImg]}
          alt=""
          className="carousel-img"
        />
        <div className="buttons">
          <button className="btn" onClick={this.prevImage}>
            Left
          </button>
          <button className="btn" onClick={this.nextImg}>
            Right
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
