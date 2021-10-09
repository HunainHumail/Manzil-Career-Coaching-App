import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationService} from '../../config';
import {store} from '../../store';
import {AppActions} from '../../store/actions';
import { showToast } from '../utills';

var baseUrl = 'https://mh1n.5stardesigners.net/uat_backend/api/';
let flag = true
Axios.interceptors.response.use(
  response => {
    return response;
  },
  ({response}) => {
    if (response.status == 401) {
        AsyncStorage.removeItem('user').then(() => {
          if(flag){
            flag = false
            showToast('Unauthorized.')
            NavigationService.reset_0('GetStartedScreen', {seen: true});
          }
          setTimeout(() => {
            flag = true
          }, 4000);
        });
      store.dispatch(AppActions.emptyState());
    }else if(response.status == 500 || response.status == 404){
      showToast('Server Error, Code 500.')
    }
    return response;
  },
);

export default class ApiCaller {
  static Get = (url = '', headers = {}) => {
    return Axios.get(`${baseUrl}${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Post = async (url = '', body = {}, headers = {}) => {
    return Axios.post(
      `${baseUrl}${url}`,
      body.formData ? body.formData : body,
      {
        headers: {...headers},
        onUploadProgress(progress) {
          var percentCompleted = Math.round(
            (progress.loaded * 100) / progress.total,
          );
          if (body.cb) {
            body.cb(percentCompleted);
          }
        },
      },
    )
      .then(res => res)
      .catch(err => console.log(err));
  };

  static Put = (url = '', body = {}, headers = {}) => {
    return Axios.put(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Patch = (url = '', body = {}, headers = {}) => {
    return Axios.patch(`${baseUrl}${url}`, body, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static Delete = (url = '', body = {}, headers = {}) => {
    return Axios.delete(`${baseUrl}${url}`, {
      headers: {...headers},
      data: body,
    })
      .then(res => res)
      .catch(err => err.response);
  };

  static GetCountry = (url = '', headers = {}) => {
    return Axios.get(`${url}`, {
      headers: {'Content-Type': 'application/json', ...headers},
    })
      .then(res => res)
      .catch(err => err.response);
  };
}
