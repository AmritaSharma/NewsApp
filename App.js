import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';

import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from './src/store/reducer';
import {persistStore} from 'redux-persist';
import {rootSaga} from './src/store/saga/sagas';
import {PersistGate} from 'redux-persist/es/integration/react';
import AppNavigator from './src/navigating/appNavigator';
import {Loading} from './src/components/loading';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return (
    <MenuProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar />

          <AppNavigator />

          <Loading />
        </PersistGate>
      </Provider>
    </MenuProvider>
  );
};

export default App;
