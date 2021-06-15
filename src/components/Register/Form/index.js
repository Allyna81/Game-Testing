import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}

      />
      <label
        htmlFor="name"
      >
        {placeholder}
      </label>
    </div>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Form.defaultProps = {
  value: '',
  type: 'text',
};

export default Form;
