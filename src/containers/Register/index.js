import { connect } from 'react-redux';
import Register from 'src/components/Register';
import { changeValue } from 'src/actions';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
  email: state.email,
  password: state.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeForm: (value, name) => {
    console.log(name);
    const action = changeValue(value, name);
    console.log('ici je lance ma nouvelle fonction', action);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
