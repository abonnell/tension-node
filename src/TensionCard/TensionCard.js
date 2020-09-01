import './TensionCard.css';
import React from 'react';

const TensionCard = props => {
  return (
    <div className='ui card'>
      <div className='ui statistic'>
        <div className='label'>{props.label}</div>
        <div className='value'>{props.value}</div>
      </div>
    </div>
  );
};

TensionCard.defaultProps = {
  value: 5,
};

export default TensionCard;
