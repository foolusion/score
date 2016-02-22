import React, { PropTypes } from 'react';
import Player from './Player';
import ResetButton from './ResetButton';
import AddPlayerContainer from './AddPlayerContainer';

const propTypes = {
  players: PropTypes.array.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onScoreAddClick: PropTypes.func.isRequired,
  onRemovePlayerClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

const App = props => {
  const { players, onSaveClick, onClearClick, onScoreAddClick, onRemovePlayerClick } = props;
  const renderPlayers = players.map((p, id) =>
      <Player
        key={id}
        id={id}
        {...p}
        onSaveClick={() => onSaveClick(id)}
        onClearClick={() => onClearClick(id)}
        onScoreAddClick={score => onScoreAddClick(id, score)}
        onRemovePlayerClick={() => onRemovePlayerClick(id)}
      />
  );

  return (
    <div>
      <div>{renderPlayers}</div>
      <ResetButton {... props} />
      <AddPlayerContainer/>
    </div>
  );
};

App.propTypes = propTypes;

export default App;
