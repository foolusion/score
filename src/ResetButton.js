import React, { PropTypes } from 'react';

const propTypes = {
  players: PropTypes.array.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

const ResetButton = props => {
  const { players, onResetClick } = props;
  if (players.length === 0 ) {
    return <div />;
  }
  return <button style={{ fontSize: '2em', width: '100%', minHeight: '48px' }} onClick={() => onResetClick()}>Reset</button>;
};

ResetButton.propTypes = propTypes;

export default ResetButton;
