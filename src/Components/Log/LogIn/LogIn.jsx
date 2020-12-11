//npm import
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
/*import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";*/
import Button from "@material-ui/core/Button";

//local import

const LogIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <CssBaseline>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      </CssBaseline>
    </>
  );
};

export default LogIn;
