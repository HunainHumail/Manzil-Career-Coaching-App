//Import: Dependencies
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from './reducers/index';

// Imports: Redux Root Saga
import {rootSaga} from './sagas/';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {store};
