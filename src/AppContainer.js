import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
  return { players: state.players };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveClick: id => dispatch({ type: 'COMMIT_DIFF', id }),
    onClearClick: id => dispatch({ type: 'CLEAR_DIFF', id }),
    onScoreAddClick: (id, diff) => dispatch({ type: 'ADD_SCORE', id, diff }),
    onRemovePlayerClick: id => dispatch({ type: 'REMOVE_PLAYER', id }),
    onResetClick: () => dispatch({ type: 'RESET_SCORE' }),
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
