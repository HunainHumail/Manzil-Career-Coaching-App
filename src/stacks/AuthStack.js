import {
  LoginScreen,
  ForgotPassword,
  ResetPassword,
  PasswordResetSuccess,
  SignupScreen,
  VerifyCodeScreen,
  AboutYourselfScreen,
  WelcomeScreen,
} from '../containers';

export const AuthStack = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
    key: 'LoginScreen',
  },
];
