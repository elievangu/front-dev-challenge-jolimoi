import PropTypes from 'prop-types';

const Display = ({result}) => {
  return (
    <div>
      <main>
        {result}
      </main>
    </div>
  )
}

Display.propTypes = {
  result: PropTypes.object
};

export default Display;
