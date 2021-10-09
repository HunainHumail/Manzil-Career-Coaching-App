// Imports: Dependencies
import {all, takeEvery, take} from 'redux-saga/effects';

// Imports: Actions
import {AuthActions} from '../actions/';

// Imports: Redux Sagas
import {
  login,
  forgotPassword,
  changePassword,
  verifyEmail,
  verifyCode,
  signup,
  resendCode,
} from './AuthSaga';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    //sagas will go here
    takeEvery(AuthActions.LOGIN, login),
  ]);
}
