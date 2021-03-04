import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      bgColor: prevState.bgColor,
    }));
  };

  render() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    return (
      <button
        onClick={this.handleIncrement}
        className="btn-like"
        style={{ background: colors[this.state.count % colors.length] }}
      >
        {this.state.count} {this.state.count === 1 ? 'Like' : 'Likes'}
      </button>
    );
  }
}

export default LikeButton;
