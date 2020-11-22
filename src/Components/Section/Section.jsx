//npm import
import PropTypes from "prop-types";

//Local import
import Form from "./Form";
import Display from "./Display";

const Section = ({ 
  value, 
  onChange, 
  onSubmit, 
  result 
}) => {
  return (
    <div id="section">
      <section>
        <Form 
          value={value} 
          onChange={onChange} 
          onSubmit={onSubmit} 
        />
        <Display result={result} />
      </section>
    </div>
  );
};

Section.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  result: PropTypes.object
};

export default Section;
