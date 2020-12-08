//npm import
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

//local import
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import configureStore, { history } from "./Store/configureStore";

const store = configureStore();

const QueryApp = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <QueryApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
