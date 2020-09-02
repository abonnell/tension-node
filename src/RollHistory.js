import React from 'react';

class RollHistory extends React.Component {
  state = { history: [0] };

  onAddItem = () => {
    this.setState(state => {
      const history = [this.props.history, ...state.history];
      return history;
    });
  };

  render() {
    return <div>{this.state.history}</div>;
  }

  componentDidUpdate() {
    this.onAddItem();
  }
}

export default RollHistory;
