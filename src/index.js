import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TensionButton from './TensionButton/TensionButton';
import TensionCard from './TensionCard/TensionCard';

class App extends React.Component {
  state = { currentPool: 0, rollResults: 0 };

  //Adds one to state of currentPool
  incrementPool = () => {
    //setState(state => {...}) is used to force a state change and render immediately rather than waiting for next batch
    this.setState(state => {
      return { currentPool: state.currentPool + 1 };
    });
  };

  //Increments and rolls
  incrementPoolAndRoll = () => {
    this.incrementPool();
    this.rollAndKeep();
  };

  //ALWAYS ROLL ONE DIE, even if the current pool has no dice in it
  //If currentPool === 0, sets currentPool = 1, calls rollHelper, then sets back to 0
  //If currentPool > 0, calls rollHelper
  rollAndKeep = () => {
    if (this.state.currentPool === 0) {
      this.setState(state => {
        return {
          currentPool: 1,
        };
      });
      this.rollHelper();
      this.setState(state => {
        return {
          currentPool: 0,
        };
      });
    } else {
      this.rollHelper();
    }
  };

  //Sets state of rollResults to array of length this.state.currentPool filled with random values between 1 and 6
  rollHelper = () => {
    //Forced state change repeated from above
    this.setState(state => {
      return {
        //Creates an array of length = state.currentPool by defining an object { length: state.currentPool }
        //Fills array with random numbers 1-6
        //Concats array values and returns as string seperated by ', ' to be readable
        rollResults: Array.from({ length: state.currentPool }, () =>
          Math.ceil(Math.random() * 6)
        ).join(', '),
      };
    });
  };

  render() {
    return (
      <div>
        <div className='card-container'>
          <TensionCard
            label='Current Tension Pool'
            value={this.state.currentPool}
          />
          <TensionCard
            label='Tension Roll Results'
            value={this.state.rollResults}
          />
        </div>
        <div className='button-container'>
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
