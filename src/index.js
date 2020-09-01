import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TensionButton from './TensionButton/TensionButton';
import TensionCard from './TensionCard/TensionCard';

class App extends React.Component {
  state = { currentPool: 0, rollResults: null };

  //Adds one to state of currentPool
  incrementPool = () => {
    this.setState({ currentPool: this.state.currentPool + 1 });
  };

  //TODO Update state between function calls
  incrementPoolAndRoll = () => {
    this.incrementPool();
    //???
    this.rollAndKeep();
  };

  //Sets state of rollResults to array of length this.state.currentPool filled with random values between 1 and 6
  //TODO If currentPool === 0, add one, roll, then subtract one
  rollAndKeep = () => {
    this.setState({
      rollResults: Array.from({ length: this.state.currentPool }, () =>
        Math.ceil(Math.random() * 6)
      ).join(', '),
    });
  };

  render() {
    return (
      <div>
        <div className='card-holder'>
          <TensionCard
            label='Current Tension Pool'
            value={this.state.currentPool}
          />
          <TensionCard
            label='Tension Roll Results'
            value={this.state.rollResults}
          />
        </div>
        <div className='button-holder'>
          <TensionButton
            buttonName='Add One Die'
            onClick={this.incrementPool}
          />
          <TensionButton
            buttonName='Add One Die, Roll'
            onClick={this.incrementPoolAndRoll}
          />
          <TensionButton
            buttonName='Roll and Keep'
            onClick={this.rollAndKeep}
          />
        </div>
        <div>{/* TODO Roll History */}</div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.currentPool >= 6) {
      this.rollAndKeep();
      this.setState({ currentPool: 0 });
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
