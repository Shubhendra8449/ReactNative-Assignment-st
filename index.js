/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import {store,persistor} from './src/modules/store';
import { PersistGate } from 'redux-persist/integration/react';




const ReduxExample = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

  </Provider>
);
AppRegistry.registerComponent(appName, () => ReduxExample);
