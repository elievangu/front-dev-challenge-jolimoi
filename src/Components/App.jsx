//npm import
import { Switch, Route } from "react-router-dom";

//Local import
import UserInterface from "./Interface/Interface";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import "../App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={UserInterface} />
        <Route path="/sign-up" render={SignUp} />
        <Route path="/sign-in" render={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
