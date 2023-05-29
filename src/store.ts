import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import rootReducer from './reducer';
import loggerMiddleware from './middlewares/logerMiddleware';

const middlewareEnhancer = applyMiddleware(loggerMiddleware);
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
