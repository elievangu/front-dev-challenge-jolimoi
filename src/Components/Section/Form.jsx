//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import


const Form = ({ input, value, handleSubmit, handleClick }) => {
  return (
    <div>
      <form onSubmit={e => handleSubmit(e, input)}>
        <input id="input" type="text" placeholder="Enter your keyword..." ref={node => (input = node )} value={value} />
        <input id="button" type="submit" value="Search" />
      </form>
    </div>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
