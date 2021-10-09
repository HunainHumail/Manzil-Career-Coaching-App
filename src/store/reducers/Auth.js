import {AuthActions} from '../actions/';
const INITIAL_STATE = {
  user: {},
  isLoading: false,
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {...state, isLoading: true};
    case AuthActions.LOGIN_SUCCESS:
      return {...state, isLoading: false, user: action.payload};
    case AuthActions.LOGIN_FAIL:
      return {...state, isLoading: false};

    default:
      return state;
  }
}

export default Reducer;
