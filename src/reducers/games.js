import { SAVE_GAMES } from 'src/actions/games';

export const initialState = {
  list: [],
  loading: true,
  // evite le reload pour l'erreur
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GAMES: {
      return {
        ...state,
        list: [...action.games],
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
