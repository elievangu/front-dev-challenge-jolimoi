//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { composeWithdevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

//local import
import reducers from "./Reducers/reducers";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

export let store = createStore(
  reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const QueryApp = () => {
  return (
    <Provider store={store}>
      <App />
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
