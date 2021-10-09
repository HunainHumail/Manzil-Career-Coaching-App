import {Toast} from 'native-base';
import Colors from '../colors';
import Fonts from '../fonts';
import {PermissionsAndroid} from 'react-native';
import moment from 'moment';

const passwordRegex = /^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[@!$#&*%^]).*$/;
// const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;

const emailRegex = /^\w+([\.-]?\w+)*@{1}\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;
const fullNameRegex = /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;
const phoneNoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export function validatePassword(password) {
  return passwordRegex.test(password);
}
export function validatePhoneNumber(phone) {
  return phoneNoRegex.test(phone);
}
export function validateEmail(email) {
  return emailRegex.test(email);
}

export function validateAlpha(name) {
  return fullNameRegex.test(name);
}

export function showToast(message, type = 'danger', duration = 2000) {
  Toast.show({
    text: message,
    position: 'bottom',
    type,
    textStyle: {fontFamily: Fonts['Poppins-Regular'], textAlign: 'center'},
    duration: duration,
  });
}

export const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        message: 'MH1 App needs access to your Gallery',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
      console.log('Gallery permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const timeConverter = appUsageTime => {
  let current_time = moment().format('x');
  let diff_time = current_time - appUsageTime;
  let hr = diff_time / 1000 / 60 / 60;
  let hours = Math.floor(hr);
  let minutes = new Date(diff_time).getMinutes();
  let seconds = new Date(diff_time).getSeconds();
  let final_time = `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${seconds < 10 ? '0' + seconds : seconds}`;
  return final_time;
};

export const timeHumanize = (time, from) => {
  let current_time = moment().format('x');
  let local_time = moment.utc(time).toDate();
  let to_local = moment(local_time).format('YYYY-MM-DD HH:mm:ss');
  let that_time = moment(to_local).format('x');
  let diff = current_time - that_time;
  // let current_time = moment().format('x');
  // let local_time = moment.utc(time).toDate();
  // let to_local = moment(local_time).format('YYYY-MM-DD HH:mm:ss');
  // let that_time = moment(time).format('x');
  // let diff = current_time - that_time;
  var final_time = Math.floor(diff / 1000 / 60);
  if (final_time < 1) {
    return 'just now';
  } else if (final_time >= 1 && final_time < 60) {
    if (final_time < 2) {
      if (from == 'homeCard') {
        return `${final_time} min ago`;
      } else {
        return `${final_time}m ago`;
      }
    } else {
      if (from == 'homeCard') {
        return `${final_time} min ago`;
      } else {
        return `${final_time}m ago`;
      }
    }
  } else if (final_time >= 60 && final_time < 1440) {
    let new_hour = Math.floor(final_time / 60);
    if (new_hour <= 1) {
      if (from == 'homeCard') {
        return `${new_hour} hour ago`;
      } else {
        return `${new_hour}h ago`;
      }
    } else {
      if (from == 'homeCard') {
        return `${new_hour} hours ago`;
      } else {
        return `${new_hour}h ago`;
      }
    }
  } else {
    return moment(time).calendar(null, {
      lastDay: `[yesterday ${moment(time).format('HH:mm')}]`,
      lastWeek: `[${moment(time).format('DD, MMM YYYY  HH:mm')}]`,
      sameElse: `[${moment(time).format('DD, MMM YYYY  HH:mm')}]`,
    });
  }
};
