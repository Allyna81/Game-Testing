import { CHANGE_VALUE, REGISTRATION } from 'src/actions';

const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case REGISTRATION : 
    return {
      ...state,
      [action.name]: action.value,
    }
    
    default:
      return state;
  }
};

export default reducer;
