import React from 'react';

const TensionButton = ({ buttonName, onClick }) => {
  return (
    <div>
      <button className='ui button' onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default TensionButton;
