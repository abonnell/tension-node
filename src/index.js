import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TensionButton from './TensionButton/TensionButton';
import TensionCard from './TensionCard/TensionCard';

class App extends React.Component {
  state = { currentPool: 1, rollResults: [null] };

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
          <TensionButton pool={this.state.currentPool} />
          <TensionButton />
          <TensionButton />
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.currentPool >= 6) {
      this.setState({ currentPool: 0 });
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
