import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const Register = ({
  pseudo,
  email,
  password,
  changeForm,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
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
  email: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

Register.defaultProps = {
};

export default Register;
