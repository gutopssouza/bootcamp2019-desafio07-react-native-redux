import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
