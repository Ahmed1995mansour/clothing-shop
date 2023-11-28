import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

const composeEnhancer =
  process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares)) || compose;

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
