import { connect } from 'react-redux';
import AddPlayer from './AddPlayer';

const mapDispatchToProps = dispatch => {
  return {
    onAddPlayerClick: name => dispatch({ type: 'ADD_PLAYER', name }),
  };
};

const AddPlayerContainer = connect(
  null,
  mapDispatchToProps
)(AddPlayer);

export default AddPlayerContainer;
