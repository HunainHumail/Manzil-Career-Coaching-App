import {put, call, select, delay} from 'redux-saga/effects';
import {AuthActions} from '../actions';
import {showToast} from '../../config/utills';
import {NavigationService} from '../../config';
import {myToken} from '../../config/NotificationService';
import {ApiCaller} from '../../config';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const validateResponse = response => {
  return new Promise((res, rej) => {
    if (response) {
      if (response.status == 200) {
        res({success: true});
      } else {
        try {
          if (response.data.error.message != 'User status unverified.') {
            showToast(response.data.error.message);
          }
          res({success: false, message: response.data.error.message});
        } catch (error) {
          res({success: false});
        }
      }
    } else {
      res({success: false});
    }
  });
};

export function* login(action) {
  const {payload} = action;
//   let date_now = moment().format('YYYY-MM-DD HH:mm:ss');
//   let utc_time = moment.utc(moment(date_now)).format('YYYY-MM-DD HH:mm:ss');
//   const response = yield call(
//     ApiCaller.Post,
//     'login',
//     {...action.payload, current_time: utc_time},
//     {'content-type': 'application/json'},
//   );
//     console.log(response, 'login')
//   let response_status = yield call(validateResponse, response);
//   if (response_status.success && response.data.success.data.user_role == "Admin") { 
//     yield put({type: AuthActions.LOGIN_FAIL});
//     showToast(`Admin cannot login on mobile app.`);
//   }
//  else if (response_status.success && response.data.success.data.user_role != "Admin") {
//     try {
//       AsyncStorage.setItem('user', JSON.stringify(response.data.success.data));
//     } catch {}
//     yield put({
//       type: AuthActions.LOGIN_SUCCESS,
//       payload: response.data.success.data,
//       device_token: myToken ? token : 'sadas',
//     });
//     NavigationService.reset_0('Tabs');
//   } else  {
//     yield put({type: AuthActions.LOGIN_FAIL});
//     if (response) {
//       if (response.data.error.message == 'User status unverified.') {
//         yield put(
//           AuthActions.forgotPassword({...action.payload, fromSignup: true}),
//         );
//       }
//     }
//   }
}

