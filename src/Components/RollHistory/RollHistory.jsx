import React, { useState, useEffect } from 'react';

import './RollHistory.css';

//pass rollResults or rollHistory as prop
// set rollHistory state = array
// Add prop to state array
// map state out as ul

const RollHistory = ({ result }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory([result, ...history]);
  }, [result]);

  const renderHistory = history.map(item => {
    if (item.length === 0) {
      return;
    }

    return <p key={result + 1 * Math.random()}>{item.join(', ')}</p>;
  });

  return (
    <div className='ui card'>
      <div className='ui list hist-list'>
        <div className='item'>
          <h3>History</h3>
          {renderHistory}
        </div>
      </div>
    </div>
  );
};

export default RollHistory;
