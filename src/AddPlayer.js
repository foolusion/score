import React, { PropTypes } from 'react';

let name = {};

const AddPlayer = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      <input style={{ flex: '3 0 0', minHeight: '48px', minWidth: '48px', fontSize: '2em' }} ref={(n) => name = n} type="text" />
      <button style={{ fontSize: '2em', flex: '1 0 0', minHeight: '48px', minWidth: '48px' }} onClick={() => {
        props.onAddPlayerClick(name.value);
        name.value = '';
      }}
      >Add</button>
    </div>
  );
};

const propTypes = {
  onAddPlayerClick: PropTypes.func.isRequired,
};

AddPlayer.propTypes = propTypes;

export default AddPlayer;
