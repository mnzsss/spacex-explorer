import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Olá</h1>
    </Provider>
  );
};

export default App;
