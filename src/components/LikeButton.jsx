import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = {
    count: 0,
    bgColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      bgColor: prevState.bgColor,
    }));
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleIncrement}
          class="btn-like"
          style={{ background: this.state.bgColor[0] }}
        >
          {this.state.count} {this.state.count === 1 ? 'Like' : 'Likes'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
