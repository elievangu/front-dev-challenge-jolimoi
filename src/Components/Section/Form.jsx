//npm import
import React from 'react';
import PropTypes from 'prop-types';

//local import


const Form = ({ input, handleSubmit, handleMessage}) => {
  return (
    <div>
      <form onSubmit={(e) => {input.value !== "" ? handleSubmit(e, input) : handleMessage(e)}}>
        <input id="input" type="text" placeholder="Enter your keyword..." autoComplete="off" ref={node => (input = node )} />
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
