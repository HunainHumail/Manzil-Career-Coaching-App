import {combineReducers} from 'redux';

// imports: Reducers
import AuthReducer from './Auth';

// Redux: Root Reducer
const rootReducer = combineReducers({
  //reducers will go here
  Auth: AuthReducer,
});

// exports
export default rootReducer;
