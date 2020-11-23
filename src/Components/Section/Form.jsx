import PropTypes from "prop-types";

const Form = ({ value, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input id="input" type="text" value={value} onChange={onChange} />
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
