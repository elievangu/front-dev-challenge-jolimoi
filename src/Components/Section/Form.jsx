import PropTypes from 'prop-types';

const Form = ({
  value,
  onSubmit,
  onChange
}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

Form.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default Form;