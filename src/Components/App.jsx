//npm import
import { Switch, Route } from "react-router-dom";

//Local import
import UserInterface from "./Interface/Interface";
import LogIn from "./Log/LogIn/LogIn";
import LogOut from "./Log/LogOut/LogOut";
import "../App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <UserInterface />
        </Route>
        <Route path="/log-in">
          <LogOut />
        </Route>
        <Route path="/log-out">
          <LogIn />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
