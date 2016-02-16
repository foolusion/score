import React from 'react';
import Player from './Player';
import AddPlayer from './AddPlayer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onScoreAddClick = this.onScoreAddClick.bind(this);
    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
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
  render() {
    const renderPlayers = this.state.players.map((p, id) =>
        <Player
          key={id}
          id={id}
          {...p}
          onSaveClick={() => this.onSaveClick(id)}
          onClearClick={() => this.onClearClick(id)}
          onScoreAddClick={this.onScoreAddClick.bind(this, id)}
        />
      );
    return (
      <div>
        <div>{renderPlayers}</div>
        <AddPlayer onAddPlayerClick={this.onAddPlayerClick} />
      </div>
    );
  }
}

export default App;
