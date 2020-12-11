//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import


const Form = ({ input, value, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={e => handleSubmit(e, input)}>
        <input id="input" type="text" placeholder="Enter your keyword..." autoComplete="off" ref={node => (input = node )} value={value} />
        <input id="button" type="submit" value="Search" />
      </form>
    </div>
  );
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  
};

export default Form;
