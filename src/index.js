import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TensionButton from './TensionButton/TensionButton';
import TensionCard from './TensionCard/TensionCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPool: 0, rollResults: [null] };
    this.incrementPool = this.incrementPool.bind(this);
  }

  incrementPool = () => {
    this.setState({ currentPool: this.state.currentPool + 1 });
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
            className='ui button'
            buttonName='Add One Die'
            onClick={this.incrementPool}
          />
          <TensionButton />
          <TensionButton />
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.currentPool >= 6) {
      //TODO roll this.state.currentPool dice
      this.setState({ currentPool: 0 });
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
