import './TensionCard.css';
import React from 'react';

const TensionCard = ({ label, value }) => {
  return (
    <div className='ui card'>
      <div className='ui statistic'>
        <div className='label'>{label}</div>
        <div className='value'>{value}</div>
      </div>
    </div>
  );
};

TensionCard.defaultProps = {
  value: 5,
};

export default TensionCard;
