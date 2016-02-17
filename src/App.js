import React from 'react';
import Player from './Player';
import AddPlayer from './AddPlayer';

const localStorageKey = 'state';

function initialState() {
  const a = localStorage.getItem(localStorageKey);
  if (!a) {
    localStorage.removeItem(localStorageKey);
    return { players: [] };
  }
  return JSON.parse(a);
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState();
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onScoreAddClick = this.onScoreAddClick.bind(this);
    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
    this.onRemovePlayerClick = this.onRemovePlayerClick.bind(this);
  }
  componentWillUpdate(_, state) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }
  onSaveClick(id) {
    const { score, diff } = this.state.players[id];
    const p = { ...this.state.players[id], score: score + diff, diff: 0 };
    const players = [...this.state.players.slice(0, id), p, ...this.state.players.slice(id + 1)];
    this.setState({ players });
    return true;
  }
  onClearClick(id) {
    const p = { ...this.state.players[id], diff: 0 };
    this.setState({ players: [...this.state.players.slice(0, id), p, ...this.state.players.slice(id + 1)] });
  }
  onScoreAddClick(id, amount) {
    const { diff } = this.state.players[id];
    const p = { ...this.state.players[id], diff: diff + amount };
    const players = [...this.state.players.slice(0, id), p, ...this.state.players.slice(id + 1)];
    this.setState({ players });
    return true;
  }
  onAddPlayerClick(name) {
    const p = { name, score: 0, diff: 0, active: false };
    this.setState({ players: [...this.state.players, p] });
  }
  onRemovePlayerClick(id) {
    this.setState({ players: [...this.state.players.slice(0, id), ...this.state.players.slice(id + 1)] });
  }
  onResetClick() {
    const players = this.state.players.map(v => {
      return { ...v, score: 0, diff: 0 };
    });
    this.setState({ players });
  }
  render() {
    const renderPlayers = this.state.players.map((p, id) =>
        <Player
          key={id}
          id={id}
          {...p}
          onSaveClick={() => this.onSaveClick(id)}
          onClearClick={() => this.onClearClick(id)}
          onScoreAddClick={this.onScoreAddClick.bind(this, id)}
          onRemovePlayerClick={() => this.onRemovePlayerClick(id)}
        />
      );
    const resetButton = this.state.players.length > 0 ? <button style={{ fontSize: '2em', width: '100%', minHeight: '48px' }} onClick={() => this.onResetClick()}>Reset</button> : false;
    return (
      <div>
        <div>{renderPlayers}</div>
        {resetButton}
        <AddPlayer onAddPlayerClick={this.onAddPlayerClick} />
      </div>
    );
  }
}

export default App;
