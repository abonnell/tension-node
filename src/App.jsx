import './App.css';

import React, { useState, useEffect } from 'react';
import TensionButton from './Components/TensionButton/TensionButton';
import TensionCard from './Components/TensionCard/TensionCard';
import RollHistory from './Components/RollHistory/RollHistory';
import Usage from './Components/Usage/Usage';

const App = () => {
  const [currentPool, setCurrentPool] = useState(0);
  const [rollResults, setRollResults] = useState([]);
  //addAndRoll toggles when incrementPoolAndRoll is called, triggering rollHelper(currentPool) via an Effect Hook
  const [addAndRoll, setAddAndRoll] = useState(false);

  //Adds one to state of currentPool
  const incrementPool = () => {
    //setCurrentPool(() => {...}) is used to force a state change and render immediately rather than waiting for next batch
    setCurrentPool(currentPool + 1);
  };

  const rollHelper = pool => {
    //Forced state change repeated from above
    return setRollResults(
      //Creates an array of length = state.currentPool by defining an object { length: currentPool }
      //Fills array with random numbers 1-6
      //Concats array values and returns as string seperated by ', ' to be readable
      Array.from({ length: pool }, () => Math.ceil(Math.random() * 6))
    );
  };

  //ALWAYS ROLL ONE DIE, even if the current pool has no dice in it
  //If currentPool === 0, sets currentPool = 1, calls rollHelper, then sets back to 0
  //If currentPool > 0, calls rollHelper
  const rollAndKeep = () => {
    //If currentPool === 0, is falsy. 1 is truthy. Or will return truthy value.
    rollHelper(currentPool || 1);
  };

  //Increments pool, changes state of addAndRoll
  const incrementPoolAndRoll = () => {
    incrementPool();
    setAddAndRoll(!addAndRoll);
  };

  //When addAndRoll changes state, roll currentPool
  //addAndRoll ONLY CHANGES when incrementPoolAndRoll is called
  useEffect(() => {
    rollHelper(currentPool);
  }, [addAndRoll]);

  //Rolls pool and resets to 0 if it hits 6 or more
  useEffect(() => {
    if (currentPool >= 6) {
      rollHelper(currentPool);
      setCurrentPool(0);
    }
  }, [currentPool]);

  return (
    <div className='ui container grid my-container '>
      <div className='twelve wide column'>
        <div className='card-container'>
          <TensionCard label='Current Tension Pool' value={currentPool} />
          <TensionCard
            label='Tension Roll Results'
            value={rollResults.join(', ')}
          />
        </div>
        <div className='button-container'>
          <TensionButton buttonName='Add One Die' onClick={incrementPool} />
          <TensionButton
            buttonName='Add One Die, Roll'
            onClick={incrementPoolAndRoll}
          />
          <TensionButton buttonName='Roll and Keep' onClick={rollAndKeep} />
        </div>
        <div className='usage-container'>
          <Usage />
        </div>
      </div>

      {/*TODO implement rollResults history logging. Requires redux?*/}
      {/* Cant get this to work. Will need to revisit at later date. */}
      <div className='four wide column'>
        <div className='history-container'>
          <RollHistory result={rollResults} />
        </div>
      </div>
    </div>
  );
};

export default App;
