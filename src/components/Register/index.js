import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const Register = ({
  pseudo,
  email,
  password,
  passwordConfirm,
  changeForm,
  handleRegistration,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration();
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <Form
        name="pseudo"
        placeholder="Pseudo"
        onChange={changeForm}
        value={pseudo}
        type="text"
      />
      <Form
        name="email"
        placeholder="Email"
        onChange={changeForm}
        value={email}
        type="email"
      />
      <Form
        name="password"
        placeholder="Password"
        onChange={changeForm}
        type="password"
        value={password}
      />
      <Form
        name="passwordConfirm"
        placeholder="Confirm your Password"
        onChange={changeForm}
        type="password"
        value={passwordConfirm}
      />
      <button
        type="submit"
      >
        Send !
      </button>
    </form>
  );
};

Register.propTypes = {
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired,
  handleRegistration: PropTypes.func.isRequired,
};

Register.defaultProps = {
};

export default Register;
