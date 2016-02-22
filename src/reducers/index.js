const initialState = { players: [] };

export function scoreApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SCORE':
      return { players: [
        ...state.players.slice(0, action.id),
        { ...state.players[action.id], diff: state.players[action.id].diff + action.diff },
        ...state.players.slice(action.id + 1),
      ] };
    case 'COMMIT_DIFF':
      return { players: [
        ...state.players.slice(0, action.id),
        { ...state.players[action.id], score: state.players[action.id].score + state.players[action.id].diff, diff: 0 },
        ...state.players.slice(action.id + 1),
      ] };
    case 'CLEAR_DIFF':
      return { players: [
        ...state.players.slice(0, action.id),
        { ...state.players[action.id], diff: 0 },
        ...state.players.slice(action.id + 1),
      ] };
    case 'RESET_SCORE':
      return { players: state.players.map(p => {
        return { ...p, score: 0, diff: 0 };
      }) };
    case 'ADD_PLAYER':
      return { players: [...state.players, { name: action.name, score: 0, diff: 0 }] };
    case 'REMOVE_PLAYER':
      return { players: [...state.players.slice(0, action.id), ...state.players.slice(action.id + 1)] };
    default:
      return state;
  }
}
