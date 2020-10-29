import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const loadStore = () => {
  try {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
}
catch(err) {
  return undefined;
}
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState);
  }
  catch(err) {
    console.log('error');
  }
  
}

const persistedState = loadStore();

const store = createStore(rootReducer,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

