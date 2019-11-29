import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-community/async-storage';
import {initializeApp} from '../actions/app.actions';

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // only navigation will be persisted
};

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

const initStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  if (typeof devToolsExtension === 'function') {
    enhancerList.push(devToolsExtension());
  }

  const composedEnhancer = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancerList,
  );
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, {}, composedEnhancer);
  persistStore(store, {}, () => {
    //callback
    console.log('persistStore callback');
    store.dispatch(initializeApp());
  });
  // then run the saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
