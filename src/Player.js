import React, { PropTypes } from 'react';

const addScores = [-10, -5, -1, 1, 5, 10];

/*
$base03:    #002b36;
$base02:    #073642;
$base01:    #586e75;
$base00:    #657b83;
$base0:     #839496;
$base1:     #93a1a1;
$base2:     #eee8d5;
$base3:     #fdf6e3;
$yellow:    #b58900;
$orange:    #cb4b16;
$red:       #dc322f;
$magenta:   #d33682;
$violet:    #6c71c4;
$blue:      #268bd2;
$cyan:      #2aa198;
$green:     #859900;
*/

const style = {
  margin: '10px',
  padding: '2px',
  background: '#fdf6e3',
  color: '#002b36',
  filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7))',
  WebkitFilter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.7))',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'center',
  maxWidth: '400px',
};

const buttonStyle = {
  border: '0px',
  margin: 'auto',
  minHeight: '48px',
  minWidth: '48px',
  flex: '1 0 0',
};

const Player = props => {
  const { name, score, diff, onSaveClick, onClearClick, onScoreAddClick, onRemovePlayerClick } = props;
  let saveButton = false;
  let clearButton = false;
  if (diff !== 0) {
    clearButton = <button style={buttonStyle} onClick={onClearClick}>×</button>;
    saveButton = <button style={buttonStyle} onClick={onSaveClick}>💾</button>;
  }
  const addScoreButtons = addScores.map((v) =>
    <button
      style={buttonStyle}
      key={v}
      onClick={() => onScoreAddClick(v)}
    >{v}</button>);

  return (
    <div style={{ position: 'relative' }}>
    <div style={style}>
      <div style={{ flex: '2 0 0', display: 'flex' }}>
        <div style={{ flex: '0 2 75%' }}><h1>{name}</h1></div>
        <div style={{ flex: '2 0 25%', textAlign: 'right' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignText: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: '#268bd2', fontSize: '3em', flex: '0 0 50%' }}>{score}</div>
            <div style={{ color: '#dc322f', fontSize: '2em', flex: '0 0 50%' }}>{diff}</div>
          </div>
        </div>
      </div>
      <div style={{ flex: '1 0 0', display: 'flex' }}>{clearButton}{saveButton}</div>
      <div style={{ flex: '0 0 100%', display: 'flex' }}>{addScoreButtons}</div>
      <div style={{ display: 'block', position: 'absolute', right: '15px', top: '0px', fontSize: '2em' }} onClick={onRemovePlayerClick}>×</div>
    </div>
    </div>
  );
};

const propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  diff: PropTypes.number.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onScoreAddClick: PropTypes.func.isRequired,
  onRemovePlayerClick: PropTypes.func.isRequired,
};

Player.propTypes = propTypes;

export default Player;
