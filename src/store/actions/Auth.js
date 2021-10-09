export default class Action {
  //Constants
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAIL = 'LOGIN_FAIL';

  static FORGOT_PASSWORD = 'FORGOT_PASSWORD';
  static FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
  static FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

  static CHANGE_PASSWORD = 'CHANGE_PASSWORD';
  static CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
  static CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL';

  static VERIFY_EMAIL = 'VERIFY_EMAIL';
  static VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';
  static VERIFY_EMAIL_FAIL = 'VERIFY_EMAIL_FAIL';

  static VERIFY_CODE = 'VERIFY_CODE';
  static VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS';
  static VERIFY_CODE_FAIL = 'VERIFY_CODE_FAIL';

  static SIGNUP = 'SIGNUP';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static SIGNUP_FAIL = 'SIGNUP_FAIL';

  static RESEND_CODE = 'RESEND_CODE'
  static RESEND_CODE_SUCCESS = 'RESEND_CODE_SUCCESS'
  static RESEND_CODE_FAIL = 'RESEND_CODE_FAIL'


  //Actions
  static login(payload) {
    return {
      type: Action.LOGIN,
      payload,
    };
  }

  static forgotPassword(payload) {
    return {
      type: Action.FORGOT_PASSWORD,
      payload,
    };
  }

  static changePassword(payload) {
    return {
      type: Action.CHANGE_PASSWORD,
      payload,
    };
  }

  static loginSuccess(payload) {
    return {
      type: Action.LOGIN_SUCCESS,
      payload,
    };
  }

  static verifyEmail(payload) {
    return {
      type: Action.VERIFY_EMAIL,
      payload,
    };
  }

  static verifyCode(payload) {
    return {
      type: Action.VERIFY_CODE,
      payload,
    };
  }

  static signup(payload) {
    return {
      type: Action.SIGNUP,
      payload,
    };
  }

  static resendCode(payload) {
    return {
      type: Action.RESEND_CODE,
      payload,
    };
  }
}
