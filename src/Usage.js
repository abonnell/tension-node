import React from 'react';
import './Usage.css';

const Usage = () => {
  return (
    <div className='ui message'>
      <h3 className='ui header'>What is a tension pool?</h3>
      <p>
        A tension pool is a tabletop RPG mechanic used to abstract time spent or
        actions taken in a given situation or scenario.
      </p>
      <p>
        The tension pool boils down to even if nothing is happening, something
        might happen
      </p>
      <h3 className='ui header'>How does it work?</h3>
      <p>
        Once you establish what the tension pool represents - minutes, hours,
        split-second actions, activities, etc - there are only four things that
        can be done with it!
      </p>
      <div className='ui celled list'>
        <div className='item'>
          <h4 className='content'>Add a Die.</h4>
          <p>
            You add a die whenever the party does something that chews up
            whatever amount of time each die represents OR whenever a player
            takes a careful or deliberate action.
          </p>
        </div>
        <div className='item'>
          <h4 className='content'>Roll the Pool.</h4>
          <p>
            You roll the dice whenever the party does something reckless, crazy,
            or dangerous that might cause them trouble OR whenever a player
            takes a reckless, brash, or crazy action. If there are no dice in
            the pool when you roll it, add one die and then put it aside again.
            You always roll at least one die when you roll the Tension Pool.
          </p>
        </div>
        <div className='item'>
          <h4 className='content'>Add a Die, Then Roll the Pool.</h4>
          <p>
            You add a die and then roll the pool whenever the party does
            something reckless, crazy, or dangerous that also chews up whatever
            amount of time each die represents.
          </p>
        </div>
        <div className='item'>
          <h4 className='content'>Roll and Clear the Pool.</h4>
          <p>
            And finally, whenever you add the sixth die to the pool, no matter
            what, you roll all the dice in the Tension Pool and then put the
            dice aside, clearing the pool.
          </p>
        </div>
      </div>

      <p>
        Whenever you roll the pool, if any dice show a ‘1,’ that means a
        Complication arises. Something happens to make the situation worse.
      </p>
      <br />
      <a href='https://theangrygm.com/making-things-complicated/'>
        Source article
      </a>
    </div>
  );
};

export default Usage;
