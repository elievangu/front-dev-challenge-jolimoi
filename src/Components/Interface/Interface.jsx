//npm import
import { useAuth0 } from "@auth0/auth0-react";
//local import
import Header from "../Header/Header";
import LogIn from "../Log/LogIn/LogIn";
import LogOut from "../Log/LogOut/LogOut";
import Section from "../Section/Section";

const UserInterface = () => {
  const { user } = useAuth0();
  return (
    <div id="app">
      {user ? (
        <>
          <LogOut />
          <Header />
          <Section />
        </>
      ) : (
        <LogIn />
      )}
    </div>
  );
};

export default UserInterface;
