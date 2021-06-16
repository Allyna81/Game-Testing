import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { changeValue, registration } from 'src/actions';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
  email: state.email,
  password: state.password,
  passwordConfirm: state.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (value, name) => {
    console.log(name);
    const action = changeValue(value, name);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
  handleRegistration: (value, name) => {
    console.log('je clique sur mon register')
    const action = registration(value, name)
    dispatch(action)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
