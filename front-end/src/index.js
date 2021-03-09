import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

function saveToLocalStore(state) {
  try {
    const initState = JSON.stringify({ item: state.item });
    localStorage.setItem("state", initState);
  } catch (e) {
    console.log(e);
  }
}
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedItemState = loadState();

const store = createStore(
  reducer,
  persistedItemState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveToLocalStore(store.getState()));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
