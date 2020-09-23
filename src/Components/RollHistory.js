import React from 'react';
// import HistoryItem from './HistoryItem';

//pass rollResults or rollHistory as prop
// set rollHistory state = array
// Add prop to state array
// map state out as ul

class RollHistory extends React.Component {
  state = { history: [[]] };

  render() {
    return <div>{this.state.history}</div>;
  }
}

export default RollHistory;
