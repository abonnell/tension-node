import React, { useState, useEffect } from 'react';

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
    return <ul key={result + 1 * Math.random()}>{item.join(', ')}</ul>;
  });

  return (
    <div className='ui container'>
      <div className='item'>
        <h3>History</h3>
        <div>{renderHistory}</div>
      </div>
    </div>
  );
};

export default RollHistory;
