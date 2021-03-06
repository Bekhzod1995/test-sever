import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ContextForUserName from './components/Context';

const rootElement = document.getElementById('chat');

const app = (store, username) => {
  ReactDOM.render(
    <Provider store={store}>
      <ContextForUserName.Provider value={username}>
        <App />
      </ContextForUserName.Provider>
    </Provider>,
    rootElement,
  );
};

export default app;
