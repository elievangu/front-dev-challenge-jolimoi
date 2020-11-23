//npm import
import PropTypes from "prop-types";

//Local import
import Form from "./Form";
import Display from "./Display";

const Section = ({ value, onHandleChange, onHandleSubmit, fetch }) => {
  return (
    <div id="section">
      <section>
        <Form value={value} onChange={onHandleChange} onSubmit={onHandleSubmit} />
        <Display result={fetch} />
      </section>
    </div>
  );
};

Section.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  result: PropTypes.object,
};

export default Section;
