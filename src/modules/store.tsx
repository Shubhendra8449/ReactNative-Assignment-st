
import rootReducer from './rootReducer';
import { thunk } from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';




export const store = createStore(rootReducer, applyMiddleware(thunk,logger));
// const store = configureStore({reducer:rootReducer});

export const persistor = persistStore(store);



