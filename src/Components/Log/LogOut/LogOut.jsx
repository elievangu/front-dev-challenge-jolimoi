//npm import
import React from "react";

import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import CssBaseline from "@material-ui/core/CssBaseline";
/*import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";*/
import Button from "@material-ui/core/Button";

//local import

const LogOut = () => {
  const { logout } = useAuth0();
  return (
    <>
      <CssBaseline>
        <Button variant="contained" color="primary" onClick={() => logout()}>
          Log Out
        </Button>
      </CssBaseline>
    </>
  );
};

LogOut.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};
export default LogOut;
