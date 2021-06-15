import { CHANGE_VALUE } from 'src/actions';

const initialState = {
  pseudo: '',
  email: '',
  password: '',
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
